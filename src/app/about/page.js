import { resolve } from "styled-jsx/css";

async function taketime(){
 await new Promise((resolve) => {
    setTimeout(resolve, 3000);
 });
}
export default async function abot(){
    await taketime();
    return(
        
        <div>
            <h1>this is about</h1>
        </div>
    );
}