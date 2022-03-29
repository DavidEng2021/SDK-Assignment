import { result } from "lodash";

export async function run(ctx) {
    let marketData = await ctx.agents.sessionStorage.get(
        "result01"
    )

    // const connectionProfile = {
    //     dbHost: process.env.dbHost,
    //     port: process.env.port,
    //     username: process.env.username,
    //     password: process.env.password,
    // }

    //要先將表格中%字串部分改為數字***
    let marky = marketData.data;
    // let ansObj = {};
    let AnsArr = [];

    for(let i = 0; i<100; i++){
        let markyData1 = marky[i]; //整個{} ex:{time:xxx; tbill:xx; tnote:xx ...}
        let markyData2 = marky[i+1]
        let ansObj = {}
        for(let key in markyData2 ){ //須排除timeStamp的部分***            
            if([key] != "TimeStamp") {
            let ans1 = markyData2[key] - markyData1[key]
            let ans1f = ans1.toFixed(4)
            ansObj[`${key}`] = ans1f; } else { let ans1 = markyData2[key]; ansObj[`${key}`] = ans1}
        }
        AnsArr.push(ansObj);
    }

    await ctx.agents.sessionStorage.putJson("result0102", {
        Ans:AnsArr,
        logic: "2.js",
    });
}

export async function handleError(ctx, error) {
    ctx.agents.logging.error(error.message);
  }