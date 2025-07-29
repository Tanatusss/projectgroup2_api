export const isAdmin = (req,res,next)=>{
  try{
    const userRole = req.user.userRole
    const companyRole = req.company.role
    if(userRole !== "ADMIN" && companyRole !== "ADMIN"){
      return res.status(403).json({msg: "Access denied, only admin can perform this action"})
    }
  }catch(error){
    next(error)
  }
}