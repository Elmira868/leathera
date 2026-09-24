
import ProductSidebar from "../Common/Sidebar/ProductSidebar"

const ProductsLayout = ({ children}) => {
  return (
   
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        {/* Sidebar */}
        <aside className="w-full shrink-0 md:w-56 lg:w-64">
         <ProductSidebar/>
        </aside>

        {/* Content */}
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    
  );
};

export default ProductsLayout