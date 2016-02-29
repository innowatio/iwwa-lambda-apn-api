import {Kinesis} from "aws-sdk";
import getDispatch from "lk-dispatch";

import * as config from "../config";

const kinesis = new Kinesis();
export default getDispatch({
    kinesisClient: kinesis,
    kinesisStream: config.KINESIS_STREAM_NAME,
    producerId: "apn-api"
});
