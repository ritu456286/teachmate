import { StatusCodes } from "http-status-codes"
import { SuccessResponse } from "../utils/common/index.js"

const info = (req, res) => {
    SuccessResponse.message = "API is Live";
    return res.status(StatusCodes.OK).json(SuccessResponse)
}

export const InfoController = {
    info,
}
