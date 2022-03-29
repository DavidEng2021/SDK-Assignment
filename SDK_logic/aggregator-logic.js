export async function run(ctx) {
    let result = await ctx.agents.sessionStorage.get(
        "result0102"
    );
    let resultFrom1 = await ctx.agents.sessionStorage.get(
        "result01"
    );

    let test = 'testing'
    let finalResult = result.Ans
    let resultFromLogic1 = resultFrom1.data

    ctx.agents.result.finalize({
        test,
        finalResult,
        resultFromLogic1
    });
}


export async function handleError(ctx, error) {
    ctx.agents.logging.error(error.message);
  }