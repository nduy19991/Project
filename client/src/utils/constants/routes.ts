// export routes on application

const MENU_PARRENT = {
  ADMIN: "/",
};

export const ROUTES = {
  ADMIN_MEN: MENU_PARRENT.ADMIN  + "/men",
  ADMIN_WOMEN: MENU_PARRENT.ADMIN  + "/women",
  ADMIN_ABOUT: MENU_PARRENT.ADMIN + "/about",
  ADMIN_USERS: MENU_PARRENT.ADMIN + "/users",
  ADMIN_USER: MENU_PARRENT.ADMIN + "/users/:id",
  ADMIN_PRODUCT: MENU_PARRENT.ADMIN + "/products",
  ADMIN_PRODUCT_SALE: MENU_PARRENT.ADMIN + "/products/sale",
  ADMIN_PRODUCT_NEWIN: MENU_PARRENT.ADMIN + "/products/newin",
  ADMIN_PRODUCT_CLOTHING: MENU_PARRENT.ADMIN + "/products/clothing",
  ADMIN_PRODUCT_SHOES: MENU_PARRENT.ADMIN + "/products/shoes",
  ADMIN_PRODUCT_ACCESSORIES: MENU_PARRENT.ADMIN + "/products/accessories",
  ADMIN_PRODUCT_SPORTSWEAR: MENU_PARRENT.ADMIN + "/products/sportswear",
  ADMIN_PRODUCT_JEANS: MENU_PARRENT.ADMIN + "/products/jeans",
  ADMIN_PRODUCT_BRANDS: MENU_PARRENT.ADMIN + "/products/brands",
  ADMIN_PRODUCT_TOPMAN: MENU_PARRENT.ADMIN + "/products/topman",
  ADMIN_PRODUCT_OUTLET: MENU_PARRENT.ADMIN + "/products/outlet",
  ADMIN_PRODUCT_MARKETPLACE: MENU_PARRENT.ADMIN + "/products/marketplace",
  LOGIN: "/login",
  REGISTER: "/register",
};
