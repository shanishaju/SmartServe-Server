const menus = require("../modal/menuModal");

exports.addmenuController = async (req, res) => {
    const { menuName, items } = req.body;
    console.log("Menu Name:", menuName);
    console.log("Items received:", items);

    try {
        const menu = new menus({
            menuName,
            items
        });
        console.log(menu)

        await menu.save();
        res.status(200).json({ message: "Menu added successfully" });
    } catch (error) {
        console.error("Error saving menu:", error);
        res.status(500).json({ message: "Error in adding menu" });
    }
};
exports.getmenuController = async (req, res) => {
    try {
        const menusData = await menus.find();
        const menuList = menusData.map(menu => ({
            id: menu._id,
            menuName: menu.menuName
        }));
        res.status(200).json(menuList);
    } catch (error) {
        console.error("Error getting menu items:", error);
        res.status(500).json({ message: "Error in getting menu items" });
    }
};
exports.getmenuItemByIdController = async (req, res) => {
    try {
        const menu = await menus.findById(req.params.id).populate("items");
        res.status(200).json(menu);
    } catch (error) {
        console.error("Error getting menu items:", error);
        res.status(500).json({ message: "Error in getting menu items" });
    }
};



