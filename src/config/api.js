// export const baseUrl = 'http://localhost:3002';
export const baseUrl = 'http://139.59.16.130:3021';

//admin
export const  getAllAdminAPI=baseUrl + '/admins';
export const  createAdminAPI=baseUrl + '/admins';
export const  loginAPI=baseUrl + '/admins/login';
export const  logout =baseUrl + '/admins/logout';
export const  getLoggedInAdminAPI =baseUrl + '/admins/me';
export const  getAdminDetailsAPI=baseUrl + '/admins/{record_id}';
export const  updateLoggedInAdminAPI=baseUrl + '/admins/me';
export const  updateAdminDetailsAPI =baseUrl + '/admins/{record_id}';
export const  deleteAdminAPI=baseUrl + '/admins';


//User
//export const loginAPI = baseUrl + '/users/login';
export const logoutAPI = baseUrl + '/users/logout';
export const registerAPI = baseUrl + '/users/register';
export const updateUserAPI = baseUrl + '/users/';
export const updateLoggedInUserAPI = baseUrl + '/users/me';
export const createUserAPI = baseUrl + '/users';
export const getAllUsersAPI = baseUrl + '/users';
export const getOneUserAPI = baseUrl + '/users/';
export const deleteUserAPI = baseUrl + '/users/{record_id}';


//lead
export const createLeadAPI = baseUrl + '/leads';
export const getAllLeadAPI = baseUrl + '/leads';
export const deleteLeadAPI = baseUrl + '/leads';
export const getOneLeadAPI = baseUrl + '/leads/{record_id}';
export const deleteOneLeadAPI = baseUrl + '/leads/{record_id}';


//category
export const getAllCategoriesAPI = baseUrl + '/categories';
export const createCategoryAPI = baseUrl + '/categories';
export const getOneCategoryAPI = baseUrl + '/categories/{record_id}';
export const deleteOneCategoryAPI = baseUrl + '/categories/{record_id}';
export const updateCategoryAPI = baseUrl + '/categories/{record_id}';


//Quotation
export const getAllQuotationAPI = baseUrl + '/quotations';
export const createQuotationAPI = baseUrl + '/quotations';
export const updateQuotationAPI = baseUrl + '/quotations/{record_id}';
export const getOneQuotationAPI = baseUrl + '/quotations/{record_id}';
export const deleteOneQuotationAPI = baseUrl + '/quotations/{record_id}';


//Product
export const AddProductApi = () => `${baseUrl}/products`;
export const EditProductApi = (id) => `${baseUrl}/products/${id}`;
export const GetAllProductsApi = () => `${baseUrl}/products`;
export const DeleteProductApi = (id) => `${baseUrl}/products/${id}`;

//Sub Product
export const AddSubProductApi = () => `${baseUrl}/subProducts`;
export const EditSubProductApi = (id) => `${baseUrl}/subProducts/${id}`;
export const DeleteSubProductApi = (id) => `${baseUrl}/subProducts/${id}`;
export const GetAllSubProductsApi = () => `${baseUrl}/subProducts`;

//Material
export const AddMaterialApi = () => `${baseUrl}/materials`;
export const EditMaterialApi = (id) => `${baseUrl}/materials/${id}`;
export const GetAllMaterialsApi = () => `${baseUrl}/materials`;
export const DeleteMaterialApi = (id) => `${baseUrl}/materials/${id}`;

//Map Material
export const AddMapMaterialApi = () => `${baseUrl}/mapMaterials`;
export const EditMapMaterialApi = (id) => `${baseUrl}/mapMaterials/${id}`;
export const DeleteMapMaterialApi = (id) => `${baseUrl}/mapMaterials/${id}`;
export const GetAllMapMaterialsApi = () => `${baseUrl}/mapMaterials`;

//Grade
export const AddGradeApi = () => `${baseUrl}/grades`;
export const EditGradeApi = (id) => `${baseUrl}/grades/${id}`;
export const DeleteGradeApi = (id) => `${baseUrl}/grades/${id}`;
export const GetAllGradesApi = () => `${baseUrl}/grades`;