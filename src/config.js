import dotenv from "dotenv";

dotenv.config();

export const KINESIS_STREAM_NAME = process.env.KINESIS_STREAM_NAME;
