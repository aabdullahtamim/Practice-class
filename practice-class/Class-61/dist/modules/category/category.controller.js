import { Category } from "./category.model.js";
const getCategories = async (req, res) => {
    const categories = await Category.find();
    res.status(200).json({
        message: "category retrieved successfully",
        data: categories
    });
};
const createCategory = async (req, res) => {
    const category = await Category.insertOne(req.body);
    res.status(201).json({
        message: "category created successfully",
        data: category
    });
};
const deleteCategory = async (req, res) => {
    const id = req.params?.id;
    const category = await Category.findByIdAndDelete(id);
    res.status(200).json({
        message: "category deleted successfully",
    });
};
const updateCategory = async (req, res) => {
    const id = req.params?.id;
    const category = await Category.findByIdAndUpdate(id, {
        ...req.body
    });
    res.status(200).json({
        message: "category updated successfully",
    });
};
export const CategoryController = {
    getCategories,
    createCategory,
    deleteCategory,
    updateCategory
};
//# sourceMappingURL=category.controller.js.map