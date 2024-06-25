import { CarType } from "../Types";
import { colors } from "./constants";

const genFoto = (car:CarType,angle?:string):string => {
const url= new URL("https://cdn.imagin.studio/getimage")
url.searchParams.append("customer", "hrjavascript-mastery")
url.searchParams.append("zoomType", "full-screen")
url.searchParams.append("make", car.make)
url.searchParams.append("modelFamily", car.model.split("/")[0])
if (angle) {
url.searchParams.append("angle", angle)
}
const i=Math.round(Math.random()*colors.length)
url.searchParams.append("paintId",colors[i])

  return url.href
};

export default genFoto;
