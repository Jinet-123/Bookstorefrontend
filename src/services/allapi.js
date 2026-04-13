import baseurl from "./baseurl"
import commonapi from "./commonapi"


//register
export const registerapi = async (reqbody) =>{
    return await commonapi("POST",`${baseurl}/register`,reqbody,{})
}

export const loginapi = async (reqbody) =>{
    return await commonapi("POST",`${baseurl}/login`,reqbody,{})
}

// add book

export const addbookapi = async (reqbody,reqheader) =>{
    return await commonapi("POST",`${baseurl}/addbook`,reqbody,reqheader)
}

//gethomebooks
export const homebookapi = async ()=>{
    return await commonapi("GET",`${baseurl}/homebooks`)
}

// get all books
export const getallbooksapi = async (reqheader,searchkey) =>{
    return await commonapi("GET",`${baseurl}/allbooks?search=${searchkey}`,{},reqheader)
}

// get a book
export const getabookapi = async (bookid, reqheader) =>{
    return await commonapi("GET",`${baseurl}/view-books/${bookid}`,{},reqheader)
}

// get user added books 
export const getuseraddedbooksapi = async (reqheader) =>{
    return await commonapi("GET",`${baseurl}/userbooks`,{},reqheader)
}

// delete user added books 
export const deleteuseraddedbooksapi = async (id) =>{
    return await commonapi("DELETE",`${baseurl}/deletebook/${id}`)
}

//history
export const gethistoryapi = async (reqheader) =>{
    return await commonapi("GET",`${baseurl}/getboughthistory`,{},reqheader)

}

//update user profile
export const updateprofileapi = async (reqbody,reqheader) =>{
    return await commonapi("PUT",`${baseurl}/updateuserprofile`,reqbody,reqheader)
}

//google login
export const googleloginapi = async (reqbody) =>{
    return await commonapi("POST",`${baseurl}/googlelogin`,reqbody)
}

////////    admin /////////
//get all books for admin
export const getallbooksinadminapi = async () =>{
    return await commonapi("GET",`${baseurl}/getallbooksinadmin`)
}

// approve book 
export const approvebooksapi = async (id) =>{
    return await commonapi("PUT",`${baseurl}/updatebookstatus/${id}`)
}

// get all users in admin
export const getallusersinadminapi = async (reqheader) =>{
    return await commonapi("GET",`${baseurl}/getallusersinadmin`,{},reqheader)
}

// update admin profile
export const updateadminprofileapi = async (reqbody,reqheader) =>{
    return await commonapi("PUT",`${baseurl}/updateadminprofile`,reqbody,reqheader)
}

//................payment ...................//
export const makepaymentapi = async (reqbody,reqheader) =>{
    return await commonapi("PUT",`${baseurl}/payment`,reqbody,reqheader)
}