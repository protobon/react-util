import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useCreateProduct } from "../../../hooks/Product/useCreateProduct";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../../common/context/notification";
import { Product } from "../../../types/product";
import Confirm from "../../../common/components/Confirm";

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  price: Yup
    .string()
    .matches(/^\d+(\.\d{1,2})?$/, "Price must be a valid number")
    .required("Price is required"),
  description: Yup.string().max(200, "Description can't be longer than 200 characters"),
  media: Yup
    .array()
    .of(Yup.string().url("Media must be a valid URL")),
});

const ProductForm: React.FC = () => {
  const { mutateAsync: createProduct, isLoading } = useCreateProduct();
  const navigate = useNavigate();
  const { addNotification } = useNotification();
  const [showModal, setShowModal] = React.useState(false);

  const handleError = (error: Error) => {
    addNotification(error.message);
  };

  const formik = useFormik<Product>({
    initialValues: {
      name: "",
      price: "",
      description: "",
      media: [],
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      createProduct(values, {
        onSuccess: (product) => {
            resetForm();
            navigate(`/products/${product._id}`);
        },
        onError: (error) => handleError(error as Error),
      });
    },
  });

  const handleConfirm = () => {
    setShowModal(false);
    formik.handleSubmit();
  };

  const handleClickOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "0 auto",
      }}
    >
      <Typography variant="h5" textAlign="center">
        Create Product
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        fullWidth
      />

      <TextField
        label="Price"
        name="price"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
        fullWidth
      />

      <TextField
        label="Description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
        multiline
        rows={4}
        fullWidth
      />

      <TextField
        label="Media (comma-separated URLs)"
        name="media"
        value={formik.values.media?.join(",")}
        onChange={(e) =>
          formik.setFieldValue(
            "media",
            e.target.value.split(",").map((url) => url.trim())
          )
        }
        onBlur={formik.handleBlur}
        error={formik.touched.media && Boolean(formik.errors.media)}
        helperText={formik.touched.media && formik.errors.media}
        fullWidth
      />

      <Button
        type="button"
        variant="contained"
        color="primary"
        disabled={isLoading}
        onClick={handleClickOpen}
      >
        {isLoading ? "Creating..." : "Create Product"}
      </Button>
      {showModal && <Confirm legend="Create Product" open={showModal} onClose={handleClose} onConfirm={handleConfirm} />}
    </Box>
  );
};

export default ProductForm;