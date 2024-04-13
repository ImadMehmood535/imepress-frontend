import { toast } from "react-toastify";

 
export const successToast = (response) => {
  toast(response);
};

export const errorToast = (error, defaultError) => {
   toast.error(error?.response?.data?.message || defaultError);

}
 
