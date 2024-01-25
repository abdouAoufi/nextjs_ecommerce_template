import { ButtonHistoryBack } from "@/modules/Admin/components/common/ButtonHistoryBack";
import { Header } from "@/modules/Admin/components/layouts/Header";
import { ProductForm } from "@/modules/Admin/components/forms/product.form";

export default function AddProductPage() {
  return (
    <>
      <Header>
        <div className="flex items-center gap-4">
          <ButtonHistoryBack withArrow />
          <h1 className="text-3xl font-bold">Add a product</h1>
        </div>
      </Header>
      <div className="container px-14">
        <ProductForm />
      </div>
    </>
  );
}
