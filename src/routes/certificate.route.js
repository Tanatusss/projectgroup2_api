import express from "express"
import * as certificateController from "../controllers/certificate.controller.js"
import { authCheck } from "../middlewares/authCheck.js"
import uploadPDFToMemory from "../middlewares/uploadPDFToMemory.js"
const certificateRouter = express.Router()

certificateRouter.get("/profiles/:id/certificates", authCheck, certificateController.getCertificatesByProfile)
certificateRouter.post("/profiles/:id/certificates", authCheck, uploadPDFToMemory, certificateController.uploadCertificate )
certificateRouter.patch("/certificates/:id", authCheck, certificateController.updateCertificate)
certificateRouter.delete("/certificates/:id", authCheck, certificateController.deleteCertificate)








export default certificateRouter