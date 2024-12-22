import { useForm } from "react-hook-form";
import InputField from "./InputField";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
const NewItem = ({ onSubmit, setShowNewItem }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <div className="flex items-center shadow-md backdrop-blur-sm top-0 left-0 right-0 top-0 h-screen  w-full absolute z-50 ">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="mx-auto p-6 border rounded bg-white w-3/5"
      >
        <div className="flex justify-between ">
          <h2 className="text-2xl font-bold mb-6">ثبت جنس جدید</h2>
          <IoClose
            onClick={() => setShowNewItem(false)}
            size={30}
            className="text-gray-600 hover:bg-gray-100 rounded cursor-pointer p-1"
          />
        </div>
        <InputField
          name="productName"
          label="نام جنس"
          register={register}
          rules={{ required: "Product name is required" }}
          errors={errors}
        />

        <InputField
          name="balance"
          label="قیمت"
          type="number"
          register={register}
          rules={{
            required: "Balance is required",
            min: { value: 0, message: "Balance cannot be negative" },
          }}
          errors={errors}
        />

        <InputField
          name="category"
          label="دسته بندی"
          type="text"
          register={register}
          rules={{ required: "Category is required" }}
          errors={errors}
        />

        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded mt-4"
        >
          ثبت جنس
        </button>
      </form>
    </div>
  );
};

NewItem.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewItem;
