import Swal from "sweetalert2";

export const showSuccess = (title, text = "") => {
  Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonColor: "#570df8",
  });
};

export const showError = (title, text = "") => {
  Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonColor: "#d63031",
  });
};

export const showInfo = (title, text = "") => {
  Swal.fire({
    icon: "info",
    title,
    text,
    confirmButtonColor: "#570df8",
  });
};

export const showConfirm = async (
  title,
  text = "",
  confirmText = "Yes"
) => {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: "Cancel",
    confirmButtonColor: "#570df8",
  });
};
