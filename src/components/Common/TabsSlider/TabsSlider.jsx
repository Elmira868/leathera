import { useState, useMemo, useRef, useEffect } from "react";

import TabTitle from "./TabTitle";
import TabButton from "./TabButton";

const TabsSlider = ({ title, tabs, onChange, swiperRef, activeTab: controlledActiveTab }) => {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id ?? "");
  const tabsRef = useRef(null);
  const tabRefs = useRef({});

  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  useEffect(() => {
    if (!tabs.length) return;
    if (!tabs.some((tab) => tab.id === activeTab)) {
      const nextTab = tabs[0].id;
      if (!isControlled) setInternalActiveTab(nextTab);
      onChange?.(nextTab);
    }
  }, [tabs, activeTab, isControlled, onChange]);

  const activeIndex = useMemo(
    () => tabs.findIndex((tab) => tab.id === activeTab),
    [tabs, activeTab]
  );

  const handleTabChange = (id) => {
    if (!isControlled) setInternalActiveTab(id);
    onChange?.(id);

    if (swiperRef?.current) {
      const idx = tabs.findIndex((tab) => tab.id === id);
      if (idx >= 0) swiperRef.current.slideTo(idx);
    }
  };

  const handlePrev = () => {
    if (!tabs.length) return;
    const nextIndex = activeIndex <= 0 ? tabs.length - 1 : activeIndex - 1;
    handleTabChange(tabs[nextIndex].id);
  };

  const handleNext = () => {
    if (!tabs.length) return;
    const nextIndex = activeIndex >= tabs.length - 1 ? 0 : activeIndex + 1;
    handleTabChange(tabs[nextIndex].id);
  };

  return (
    <div className="mt-6 sm:mt-10 flex items-center justify-between mx-8 border border-gray-300 overflow-hidden">
      <div className="shrink-0">
        <TabTitle>{title}</TabTitle>
      </div>

      <div
        ref={tabsRef}
        className="flex flex-1 items-center gap-x-4 sm:gap-x-6 px-3 sm:px-5 overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[tab.id] = el;
            }}
            type="button"
            onClick={() => handleTabChange(tab.id)}
            className={`shrink-0 text-xs sm:text-sm font-roboto-Medium transition-colors cursor-pointer ${
              activeTab === tab.id ? "text-primary" : "text-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="shrink-0">
        <TabButton onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
};

export default TabsSlider;