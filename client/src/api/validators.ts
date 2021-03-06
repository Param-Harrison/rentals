import * as types from "./types";

export function validate_AuthOptional(value: any): value is types.AuthOptional {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_AuthOptional_Authorization(value.Authorization)) {
    return false;
  }
  return true;
}

export function validate_AuthOptional_Authorization(value: any): boolean {
  return value === undefined || validate_AuthOptional_Authorization_present(value);
}

export function validate_AuthOptional_Authorization_present(value: any): boolean {
  return typeof value === "string";
}

export function validate_AuthRequired(value: any): value is types.AuthRequired {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_AuthRequired_Authorization(value.Authorization)) {
    return false;
  }
  return true;
}

export function validate_AuthRequired_Authorization(value: any): boolean {
  return typeof value === "string";
}

export function validate_RegisterUserRequest(value: any): value is types.RegisterUserRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_RegisterUserRequest_email(value.email)) {
    return false;
  }
  if (!validate_RegisterUserRequest_password(value.password)) {
    return false;
  }
  if (!validate_RegisterUserRequest_name(value.name)) {
    return false;
  }
  if (!validate_RegisterUserRequest_role(value.role)) {
    return false;
  }
  return true;
}

export function validate_RegisterUserRequest_email(value: any): boolean {
  return typeof value === "string";
}

export function validate_RegisterUserRequest_password(value: any): boolean {
  return typeof value === "string";
}

export function validate_RegisterUserRequest_name(value: any): boolean {
  return typeof value === "string";
}

export function validate_RegisterUserRequest_role(value: any): boolean {
  return validate_Role(value);
}

export function validate_VerifyEmailRequest(value: any): value is types.VerifyEmailRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_VerifyEmailRequest_token(value.token)) {
    return false;
  }
  return true;
}

export function validate_VerifyEmailRequest_token(value: any): boolean {
  return typeof value === "string";
}

export function validate_VerifyEmailResponse(value: any): value is types.VerifyEmailResponse {
  return validate_LoginUserResponse(value);
}

export function validate_LoginUserRequest(value: any): value is types.LoginUserRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_LoginUserRequest_email(value.email)) {
    return false;
  }
  if (!validate_LoginUserRequest_password(value.password)) {
    return false;
  }
  return true;
}

export function validate_LoginUserRequest_email(value: any): boolean {
  return typeof value === "string";
}

export function validate_LoginUserRequest_password(value: any): boolean {
  return typeof value === "string";
}

export function validate_LoginUserResponse(value: any): value is types.LoginUserResponse {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_LoginUserResponse_authToken(value.authToken)) {
    return false;
  }
  if (!validate_LoginUserResponse_userId(value.userId)) {
    return false;
  }
  if (!validate_LoginUserResponse_name(value.name)) {
    return false;
  }
  if (!validate_LoginUserResponse_role(value.role)) {
    return false;
  }
  return true;
}

export function validate_LoginUserResponse_authToken(value: any): boolean {
  return typeof value === "string";
}

export function validate_LoginUserResponse_userId(value: any): boolean {
  return typeof value === "string";
}

export function validate_LoginUserResponse_name(value: any): boolean {
  return typeof value === "string";
}

export function validate_LoginUserResponse_role(value: any): boolean {
  return validate_Role(value);
}

export function validate_UpdateUserRequest(value: any): value is types.UpdateUserRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_UpdateUserRequest_email(value.email)) {
    return false;
  }
  if (!validate_UpdateUserRequest_name(value.name)) {
    return false;
  }
  if (!validate_UpdateUserRequest_currentPassword(value.currentPassword)) {
    return false;
  }
  if (!validate_UpdateUserRequest_newPassword(value.newPassword)) {
    return false;
  }
  return true;
}

export function validate_UpdateUserRequest_email(value: any): boolean {
  return value === undefined || validate_UpdateUserRequest_email_present(value);
}

export function validate_UpdateUserRequest_email_present(value: any): boolean {
  return typeof value === "string";
}

export function validate_UpdateUserRequest_name(value: any): boolean {
  return value === undefined || validate_UpdateUserRequest_name_present(value);
}

export function validate_UpdateUserRequest_name_present(value: any): boolean {
  return typeof value === "string";
}

export function validate_UpdateUserRequest_currentPassword(value: any): boolean {
  return value === undefined || validate_UpdateUserRequest_currentPassword_present(value);
}

export function validate_UpdateUserRequest_currentPassword_present(value: any): boolean {
  return typeof value === "string";
}

export function validate_UpdateUserRequest_newPassword(value: any): boolean {
  return value === undefined || validate_UpdateUserRequest_newPassword_present(value);
}

export function validate_UpdateUserRequest_newPassword_present(value: any): boolean {
  return typeof value === "string";
}

export function validate_DeleteUserRequest(value: any): value is types.DeleteUserRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_DeleteUserRequest_password(value.password)) {
    return false;
  }
  return true;
}

export function validate_DeleteUserRequest_password(value: any): boolean {
  return value === undefined || validate_DeleteUserRequest_password_present(value);
}

export function validate_DeleteUserRequest_password_present(value: any): boolean {
  return typeof value === "string";
}

export function validate_ListUsersRequest(value: any): value is types.ListUsersRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListUsersRequest_filter(value.filter)) {
    return false;
  }
  if (!validate_ListUsersRequest_maxPerPage(value.maxPerPage)) {
    return false;
  }
  if (!validate_ListUsersRequest_page(value.page)) {
    return false;
  }
  return true;
}

export function validate_ListUsersRequest_filter(value: any): boolean {
  return value === undefined || validate_ListUsersRequest_filter_present(value);
}

export function validate_ListUsersRequest_filter_present(value: any): boolean {
  return validate_ListUsersFilter(value);
}

export function validate_ListUsersRequest_maxPerPage(value: any): boolean {
  return value === undefined || validate_ListUsersRequest_maxPerPage_present(value);
}

export function validate_ListUsersRequest_maxPerPage_present(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ListUsersRequest_page(value: any): boolean {
  return value === undefined || validate_ListUsersRequest_page_present(value);
}

export function validate_ListUsersRequest_page_present(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ListUsersFilter(value: any): value is types.ListUsersFilter {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListUsersFilter_role(value.role)) {
    return false;
  }
  if (!validate_ListUsersFilter_name(value.name)) {
    return false;
  }
  return true;
}

export function validate_ListUsersFilter_role(value: any): boolean {
  return value === undefined || validate_ListUsersFilter_role_present(value);
}

export function validate_ListUsersFilter_role_present(value: any): boolean {
  return validate_Role(value);
}

export function validate_ListUsersFilter_name(value: any): boolean {
  return value === undefined || validate_ListUsersFilter_name_present(value);
}

export function validate_ListUsersFilter_name_present(value: any): boolean {
  return typeof value === "string";
}

export function validate_ListUsersResponse(value: any): value is types.ListUsersResponse {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListUsersResponse_results(value.results)) {
    return false;
  }
  if (!validate_ListUsersResponse_totalResults(value.totalResults)) {
    return false;
  }
  if (!validate_ListUsersResponse_pageCount(value.pageCount)) {
    return false;
  }
  return true;
}

export function validate_ListUsersResponse_results(value: any): boolean {
  if (!Array.isArray(value)) {
    return false;
  }
  for (const item of value) {
    if (!validate_ListUsersResponse_results_item(item)) {
      return false;
    }
  }
  return true;
}

export function validate_ListUsersResponse_results_item(value: any): boolean {
  return validate_UserDetails(value);
}

export function validate_ListUsersResponse_totalResults(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ListUsersResponse_pageCount(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_UserDetails(value: any): value is types.UserDetails {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_UserDetails_userId(value.userId)) {
    return false;
  }
  if (!validate_UserDetails_email(value.email)) {
    return false;
  }
  if (!validate_UserDetails_name(value.name)) {
    return false;
  }
  if (!validate_UserDetails_role(value.role)) {
    return false;
  }
  return true;
}

export function validate_UserDetails_userId(value: any): boolean {
  return typeof value === "string";
}

export function validate_UserDetails_email(value: any): boolean {
  return typeof value === "string";
}

export function validate_UserDetails_name(value: any): boolean {
  return typeof value === "string";
}

export function validate_UserDetails_role(value: any): boolean {
  return validate_Role(value);
}

export function validate_Role(value: any): value is types.Role {
  if (validate_Role_0(value)) {
    return true;
  }
  if (validate_Role_1(value)) {
    return true;
  }
  if (validate_Role_2(value)) {
    return true;
  }
  return false;
}

export function validate_Role_0(value: any): boolean {
  return value === "client";
}

export function validate_Role_1(value: any): boolean {
  return value === "realtor";
}

export function validate_Role_2(value: any): boolean {
  return value === "admin";
}

export function validate_CreateApartmentRequest(value: any): value is types.CreateApartmentRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_CreateApartmentRequest_info(value.info)) {
    return false;
  }
  if (!validate_CreateApartmentRequest_realtorId(value.realtorId)) {
    return false;
  }
  return true;
}

export function validate_CreateApartmentRequest_info(value: any): boolean {
  return validate_ApartmentInfo(value);
}

export function validate_CreateApartmentRequest_realtorId(value: any): boolean {
  return value === undefined || validate_CreateApartmentRequest_realtorId_present(value);
}

export function validate_CreateApartmentRequest_realtorId_present(value: any): boolean {
  return typeof value === "string";
}

export function validate_CreateApartmentResponse(value: any): value is types.CreateApartmentResponse {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_CreateApartmentResponse_message(value.message)) {
    return false;
  }
  if (!validate_CreateApartmentResponse_apartmentId(value.apartmentId)) {
    return false;
  }
  return true;
}

export function validate_CreateApartmentResponse_message(value: any): boolean {
  return typeof value === "string";
}

export function validate_CreateApartmentResponse_apartmentId(value: any): boolean {
  return typeof value === "string";
}

export function validate_UpdateApartmentRequest(value: any): value is types.UpdateApartmentRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_UpdateApartmentRequest_info(value.info)) {
    return false;
  }
  if (!validate_UpdateApartmentRequest_realtorId(value.realtorId)) {
    return false;
  }
  return true;
}

export function validate_UpdateApartmentRequest_info(value: any): boolean {
  return validate_ApartmentInfo(value);
}

export function validate_UpdateApartmentRequest_realtorId(value: any): boolean {
  return value === undefined || validate_UpdateApartmentRequest_realtorId_present(value);
}

export function validate_UpdateApartmentRequest_realtorId_present(value: any): boolean {
  return typeof value === "string";
}

export function validate_ListApartmentsRequest(value: any): value is types.ListApartmentsRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListApartmentsRequest_filter(value.filter)) {
    return false;
  }
  if (!validate_ListApartmentsRequest_maxPerPage(value.maxPerPage)) {
    return false;
  }
  if (!validate_ListApartmentsRequest_page(value.page)) {
    return false;
  }
  return true;
}

export function validate_ListApartmentsRequest_filter(value: any): boolean {
  return value === undefined || validate_ListApartmentsRequest_filter_present(value);
}

export function validate_ListApartmentsRequest_filter_present(value: any): boolean {
  return validate_ListApartmentsFilter(value);
}

export function validate_ListApartmentsRequest_maxPerPage(value: any): boolean {
  return value === undefined || validate_ListApartmentsRequest_maxPerPage_present(value);
}

export function validate_ListApartmentsRequest_maxPerPage_present(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ListApartmentsRequest_page(value: any): boolean {
  return value === undefined || validate_ListApartmentsRequest_page_present(value);
}

export function validate_ListApartmentsRequest_page_present(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ListApartmentsFilter(value: any): value is types.ListApartmentsFilter {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListApartmentsFilter_realtorId(value.realtorId)) {
    return false;
  }
  if (!validate_ListApartmentsFilter_rented(value.rented)) {
    return false;
  }
  if (!validate_ListApartmentsFilter_sizeRange(value.sizeRange)) {
    return false;
  }
  if (!validate_ListApartmentsFilter_priceRange(value.priceRange)) {
    return false;
  }
  if (!validate_ListApartmentsFilter_numberOfRooms(value.numberOfRooms)) {
    return false;
  }
  if (!validate_ListApartmentsFilter_viewport(value.viewport)) {
    return false;
  }
  return true;
}

export function validate_ListApartmentsFilter_realtorId(value: any): boolean {
  return value === undefined || validate_ListApartmentsFilter_realtorId_present(value);
}

export function validate_ListApartmentsFilter_realtorId_present(value: any): boolean {
  return typeof value === "string";
}

export function validate_ListApartmentsFilter_rented(value: any): boolean {
  return value === undefined || validate_ListApartmentsFilter_rented_present(value);
}

export function validate_ListApartmentsFilter_rented_present(value: any): boolean {
  return typeof value === "boolean";
}

export function validate_ListApartmentsFilter_sizeRange(value: any): boolean {
  return value === undefined || validate_ListApartmentsFilter_sizeRange_present(value);
}

export function validate_ListApartmentsFilter_sizeRange_present(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListApartmentsFilter_sizeRange_present_min(value.min)) {
    return false;
  }
  if (!validate_ListApartmentsFilter_sizeRange_present_max(value.max)) {
    return false;
  }
  return true;
}

export function validate_ListApartmentsFilter_sizeRange_present_min(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ListApartmentsFilter_sizeRange_present_max(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ListApartmentsFilter_priceRange(value: any): boolean {
  return value === undefined || validate_ListApartmentsFilter_priceRange_present(value);
}

export function validate_ListApartmentsFilter_priceRange_present(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListApartmentsFilter_priceRange_present_min(value.min)) {
    return false;
  }
  if (!validate_ListApartmentsFilter_priceRange_present_max(value.max)) {
    return false;
  }
  return true;
}

export function validate_ListApartmentsFilter_priceRange_present_min(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ListApartmentsFilter_priceRange_present_max(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ListApartmentsFilter_numberOfRooms(value: any): boolean {
  return value === undefined || validate_ListApartmentsFilter_numberOfRooms_present(value);
}

export function validate_ListApartmentsFilter_numberOfRooms_present(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListApartmentsFilter_numberOfRooms_present_min(value.min)) {
    return false;
  }
  if (!validate_ListApartmentsFilter_numberOfRooms_present_max(value.max)) {
    return false;
  }
  return true;
}

export function validate_ListApartmentsFilter_numberOfRooms_present_min(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ListApartmentsFilter_numberOfRooms_present_max(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ListApartmentsFilter_viewport(value: any): boolean {
  return value === undefined || validate_ListApartmentsFilter_viewport_present(value);
}

export function validate_ListApartmentsFilter_viewport_present(value: any): boolean {
  return validate_Viewport(value);
}

export function validate_ListApartmentsResponse(value: any): value is types.ListApartmentsResponse {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListApartmentsResponse_results(value.results)) {
    return false;
  }
  if (!validate_ListApartmentsResponse_totalResults(value.totalResults)) {
    return false;
  }
  if (!validate_ListApartmentsResponse_pageCount(value.pageCount)) {
    return false;
  }
  return true;
}

export function validate_ListApartmentsResponse_results(value: any): boolean {
  if (!Array.isArray(value)) {
    return false;
  }
  for (const item of value) {
    if (!validate_ListApartmentsResponse_results_item(item)) {
      return false;
    }
  }
  return true;
}

export function validate_ListApartmentsResponse_results_item(value: any): boolean {
  return validate_ApartmentDetails(value);
}

export function validate_ListApartmentsResponse_totalResults(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ListApartmentsResponse_pageCount(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ApartmentDetails(value: any): value is types.ApartmentDetails {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ApartmentDetails_apartmentId(value.apartmentId)) {
    return false;
  }
  if (!validate_ApartmentDetails_info(value.info)) {
    return false;
  }
  if (!validate_ApartmentDetails_realtor(value.realtor)) {
    return false;
  }
  if (!validate_ApartmentDetails_dateAdded(value.dateAdded)) {
    return false;
  }
  return true;
}

export function validate_ApartmentDetails_apartmentId(value: any): boolean {
  return typeof value === "string";
}

export function validate_ApartmentDetails_info(value: any): boolean {
  return validate_ApartmentInfo(value);
}

export function validate_ApartmentDetails_realtor(value: any): boolean {
  return validate_Realtor(value);
}

export function validate_ApartmentDetails_dateAdded(value: any): boolean {
  return validate_Date(value);
}

export function validate_ApartmentInfo(value: any): value is types.ApartmentInfo {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ApartmentInfo_floorArea(value.floorArea)) {
    return false;
  }
  if (!validate_ApartmentInfo_pricePerMonth(value.pricePerMonth)) {
    return false;
  }
  if (!validate_ApartmentInfo_numberOfRooms(value.numberOfRooms)) {
    return false;
  }
  if (!validate_ApartmentInfo_coordinates(value.coordinates)) {
    return false;
  }
  if (!validate_ApartmentInfo_rented(value.rented)) {
    return false;
  }
  return true;
}

export function validate_ApartmentInfo_floorArea(value: any): boolean {
  return typeof value === "number";
}

export function validate_ApartmentInfo_pricePerMonth(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ApartmentInfo_numberOfRooms(value: any): boolean {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_ApartmentInfo_coordinates(value: any): boolean {
  return validate_Coordinates(value);
}

export function validate_ApartmentInfo_rented(value: any): boolean {
  return typeof value === "boolean";
}

export function validate_Viewport(value: any): value is types.Viewport {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_Viewport_southWest(value.southWest)) {
    return false;
  }
  if (!validate_Viewport_northEast(value.northEast)) {
    return false;
  }
  return true;
}

export function validate_Viewport_southWest(value: any): boolean {
  return validate_Coordinates(value);
}

export function validate_Viewport_northEast(value: any): boolean {
  return validate_Coordinates(value);
}

export function validate_Coordinates(value: any): value is types.Coordinates {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_Coordinates_latitude(value.latitude)) {
    return false;
  }
  if (!validate_Coordinates_longitude(value.longitude)) {
    return false;
  }
  return true;
}

export function validate_Coordinates_latitude(value: any): boolean {
  return typeof value === "number";
}

export function validate_Coordinates_longitude(value: any): boolean {
  return typeof value === "number";
}

export function validate_Date(value: any): value is types.Date {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_Realtor(value: any): value is types.Realtor {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_Realtor_realtorId(value.realtorId)) {
    return false;
  }
  if (!validate_Realtor_name(value.name)) {
    return false;
  }
  return true;
}

export function validate_Realtor_realtorId(value: any): boolean {
  return typeof value === "string";
}

export function validate_Realtor_name(value: any): boolean {
  return typeof value === "string";
}

export function validate_RegisterUser_Response(value: any): value is types.RegisterUser_Response {
  if (validate_RegisterUser_Response_0(value)) {
    return true;
  }
  if (validate_RegisterUser_Response_1(value)) {
    return true;
  }
  if (validate_RegisterUser_Response_2(value)) {
    return true;
  }
  return false;
}

export function validate_RegisterUser_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_RegisterUser_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_RegisterUser_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_RegisterUser_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_RegisterUser_Response_0_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_RegisterUser_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_RegisterUser_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_RegisterUser_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_RegisterUser_Response_1_kind(value: any): boolean {
  return value === "unauthorized";
}

export function validate_RegisterUser_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_RegisterUser_Response_2(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_RegisterUser_Response_2_kind(value.kind)) {
    return false;
  }
  if (!validate_RegisterUser_Response_2_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_RegisterUser_Response_2_kind(value: any): boolean {
  return value === "failure";
}

export function validate_RegisterUser_Response_2_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_VerifyEmailAddress_Response(value: any): value is types.VerifyEmailAddress_Response {
  if (validate_VerifyEmailAddress_Response_0(value)) {
    return true;
  }
  if (validate_VerifyEmailAddress_Response_1(value)) {
    return true;
  }
  return false;
}

export function validate_VerifyEmailAddress_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_VerifyEmailAddress_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_VerifyEmailAddress_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_VerifyEmailAddress_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_VerifyEmailAddress_Response_0_data(value: any): boolean {
  return validate_VerifyEmailResponse(value);
}

export function validate_VerifyEmailAddress_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_VerifyEmailAddress_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_VerifyEmailAddress_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_VerifyEmailAddress_Response_1_kind(value: any): boolean {
  return value === "failure";
}

export function validate_VerifyEmailAddress_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_LoginUser_Response(value: any): value is types.LoginUser_Response {
  if (validate_LoginUser_Response_0(value)) {
    return true;
  }
  if (validate_LoginUser_Response_1(value)) {
    return true;
  }
  return false;
}

export function validate_LoginUser_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_LoginUser_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_LoginUser_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_LoginUser_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_LoginUser_Response_0_data(value: any): boolean {
  return validate_LoginUserResponse(value);
}

export function validate_LoginUser_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_LoginUser_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_LoginUser_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_LoginUser_Response_1_kind(value: any): boolean {
  return value === "failure";
}

export function validate_LoginUser_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_CheckAuth_Response(value: any): value is types.CheckAuth_Response {
  if (validate_CheckAuth_Response_0(value)) {
    return true;
  }
  if (validate_CheckAuth_Response_1(value)) {
    return true;
  }
  return false;
}

export function validate_CheckAuth_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_CheckAuth_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_CheckAuth_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_CheckAuth_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_CheckAuth_Response_0_data(value: any): boolean {
  return validate_LoginUserResponse(value);
}

export function validate_CheckAuth_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_CheckAuth_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_CheckAuth_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_CheckAuth_Response_1_kind(value: any): boolean {
  return value === "failure";
}

export function validate_CheckAuth_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_UpdateUser_Response(value: any): value is types.UpdateUser_Response {
  if (validate_UpdateUser_Response_0(value)) {
    return true;
  }
  if (validate_UpdateUser_Response_1(value)) {
    return true;
  }
  if (validate_UpdateUser_Response_2(value)) {
    return true;
  }
  if (validate_UpdateUser_Response_3(value)) {
    return true;
  }
  return false;
}

export function validate_UpdateUser_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_UpdateUser_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_UpdateUser_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_UpdateUser_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_UpdateUser_Response_0_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_UpdateUser_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_UpdateUser_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_UpdateUser_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_UpdateUser_Response_1_kind(value: any): boolean {
  return value === "unauthorized";
}

export function validate_UpdateUser_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_UpdateUser_Response_2(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_UpdateUser_Response_2_kind(value.kind)) {
    return false;
  }
  if (!validate_UpdateUser_Response_2_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_UpdateUser_Response_2_kind(value: any): boolean {
  return value === "failure";
}

export function validate_UpdateUser_Response_2_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_UpdateUser_Response_3(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_UpdateUser_Response_3_kind(value.kind)) {
    return false;
  }
  return true;
}

export function validate_UpdateUser_Response_3_kind(value: any): boolean {
  return value === "notfound";
}

export function validate_DeleteUser_Response(value: any): value is types.DeleteUser_Response {
  if (validate_DeleteUser_Response_0(value)) {
    return true;
  }
  if (validate_DeleteUser_Response_1(value)) {
    return true;
  }
  if (validate_DeleteUser_Response_2(value)) {
    return true;
  }
  return false;
}

export function validate_DeleteUser_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_DeleteUser_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_DeleteUser_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_DeleteUser_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_DeleteUser_Response_0_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_DeleteUser_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_DeleteUser_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_DeleteUser_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_DeleteUser_Response_1_kind(value: any): boolean {
  return value === "unauthorized";
}

export function validate_DeleteUser_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_DeleteUser_Response_2(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_DeleteUser_Response_2_kind(value.kind)) {
    return false;
  }
  return true;
}

export function validate_DeleteUser_Response_2_kind(value: any): boolean {
  return value === "notfound";
}

export function validate_ListUsers_Response(value: any): value is types.ListUsers_Response {
  if (validate_ListUsers_Response_0(value)) {
    return true;
  }
  if (validate_ListUsers_Response_1(value)) {
    return true;
  }
  return false;
}

export function validate_ListUsers_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListUsers_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_ListUsers_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_ListUsers_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_ListUsers_Response_0_data(value: any): boolean {
  return validate_ListUsersResponse(value);
}

export function validate_ListUsers_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListUsers_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_ListUsers_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_ListUsers_Response_1_kind(value: any): boolean {
  return value === "unauthorized";
}

export function validate_ListUsers_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_GetUser_Response(value: any): value is types.GetUser_Response {
  if (validate_GetUser_Response_0(value)) {
    return true;
  }
  if (validate_GetUser_Response_1(value)) {
    return true;
  }
  if (validate_GetUser_Response_2(value)) {
    return true;
  }
  return false;
}

export function validate_GetUser_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_GetUser_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_GetUser_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_GetUser_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_GetUser_Response_0_data(value: any): boolean {
  return validate_UserDetails(value);
}

export function validate_GetUser_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_GetUser_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_GetUser_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_GetUser_Response_1_kind(value: any): boolean {
  return value === "unauthorized";
}

export function validate_GetUser_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_GetUser_Response_2(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_GetUser_Response_2_kind(value.kind)) {
    return false;
  }
  return true;
}

export function validate_GetUser_Response_2_kind(value: any): boolean {
  return value === "notfound";
}

export function validate_CreateApartment_Response(value: any): value is types.CreateApartment_Response {
  if (validate_CreateApartment_Response_0(value)) {
    return true;
  }
  if (validate_CreateApartment_Response_1(value)) {
    return true;
  }
  if (validate_CreateApartment_Response_2(value)) {
    return true;
  }
  return false;
}

export function validate_CreateApartment_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_CreateApartment_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_CreateApartment_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_CreateApartment_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_CreateApartment_Response_0_data(value: any): boolean {
  return validate_CreateApartmentResponse(value);
}

export function validate_CreateApartment_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_CreateApartment_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_CreateApartment_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_CreateApartment_Response_1_kind(value: any): boolean {
  return value === "unauthorized";
}

export function validate_CreateApartment_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_CreateApartment_Response_2(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_CreateApartment_Response_2_kind(value.kind)) {
    return false;
  }
  if (!validate_CreateApartment_Response_2_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_CreateApartment_Response_2_kind(value: any): boolean {
  return value === "failure";
}

export function validate_CreateApartment_Response_2_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_UpdateApartment_Response(value: any): value is types.UpdateApartment_Response {
  if (validate_UpdateApartment_Response_0(value)) {
    return true;
  }
  if (validate_UpdateApartment_Response_1(value)) {
    return true;
  }
  if (validate_UpdateApartment_Response_2(value)) {
    return true;
  }
  if (validate_UpdateApartment_Response_3(value)) {
    return true;
  }
  return false;
}

export function validate_UpdateApartment_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_UpdateApartment_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_UpdateApartment_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_UpdateApartment_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_UpdateApartment_Response_0_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_UpdateApartment_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_UpdateApartment_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_UpdateApartment_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_UpdateApartment_Response_1_kind(value: any): boolean {
  return value === "unauthorized";
}

export function validate_UpdateApartment_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_UpdateApartment_Response_2(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_UpdateApartment_Response_2_kind(value.kind)) {
    return false;
  }
  if (!validate_UpdateApartment_Response_2_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_UpdateApartment_Response_2_kind(value: any): boolean {
  return value === "failure";
}

export function validate_UpdateApartment_Response_2_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_UpdateApartment_Response_3(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_UpdateApartment_Response_3_kind(value.kind)) {
    return false;
  }
  return true;
}

export function validate_UpdateApartment_Response_3_kind(value: any): boolean {
  return value === "notfound";
}

export function validate_DeleteApartment_Response(value: any): value is types.DeleteApartment_Response {
  if (validate_DeleteApartment_Response_0(value)) {
    return true;
  }
  if (validate_DeleteApartment_Response_1(value)) {
    return true;
  }
  if (validate_DeleteApartment_Response_2(value)) {
    return true;
  }
  return false;
}

export function validate_DeleteApartment_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_DeleteApartment_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_DeleteApartment_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_DeleteApartment_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_DeleteApartment_Response_0_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_DeleteApartment_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_DeleteApartment_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_DeleteApartment_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_DeleteApartment_Response_1_kind(value: any): boolean {
  return value === "unauthorized";
}

export function validate_DeleteApartment_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_DeleteApartment_Response_2(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_DeleteApartment_Response_2_kind(value.kind)) {
    return false;
  }
  return true;
}

export function validate_DeleteApartment_Response_2_kind(value: any): boolean {
  return value === "notfound";
}

export function validate_ListApartments_Response(value: any): value is types.ListApartments_Response {
  if (validate_ListApartments_Response_0(value)) {
    return true;
  }
  if (validate_ListApartments_Response_1(value)) {
    return true;
  }
  return false;
}

export function validate_ListApartments_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListApartments_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_ListApartments_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_ListApartments_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_ListApartments_Response_0_data(value: any): boolean {
  return validate_ListApartmentsResponse(value);
}

export function validate_ListApartments_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_ListApartments_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_ListApartments_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_ListApartments_Response_1_kind(value: any): boolean {
  return value === "unauthorized";
}

export function validate_ListApartments_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_GetApartment_Response(value: any): value is types.GetApartment_Response {
  if (validate_GetApartment_Response_0(value)) {
    return true;
  }
  if (validate_GetApartment_Response_1(value)) {
    return true;
  }
  if (validate_GetApartment_Response_2(value)) {
    return true;
  }
  return false;
}

export function validate_GetApartment_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_GetApartment_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_GetApartment_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_GetApartment_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_GetApartment_Response_0_data(value: any): boolean {
  return validate_ApartmentDetails(value);
}

export function validate_GetApartment_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_GetApartment_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_GetApartment_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_GetApartment_Response_1_kind(value: any): boolean {
  return value === "unauthorized";
}

export function validate_GetApartment_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_GetApartment_Response_2(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_GetApartment_Response_2_kind(value.kind)) {
    return false;
  }
  return true;
}

export function validate_GetApartment_Response_2_kind(value: any): boolean {
  return value === "notfound";
}

export function validate_bool(value: any): value is boolean {
  return typeof value === "boolean";
}

export function validate_int(value: any): value is number {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_long(value: any): value is number {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_float(value: any): value is number {
  return typeof value === "number";
}

export function validate_double(value: any): value is number {
  return typeof value === "number";
}

export function validate_string(value: any): value is string {
  return typeof value === "string";
}

export function validate_null(value: any): value is null {
  return value === null;
}
