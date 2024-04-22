import { Box, Link, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function C() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Orator>
        Conditional value at risk optimization is a technique that finds its
        origin in the financial sector. Creating robust financial portfolio is a
        risk prone optimization problem with many pitfalls. As a result,
        statisticians created methods and risk assessment measures to ascertain
        the stability of certain portfolios. This led to the development of VaR,
        the predecessor to CVaR. Traditional value at risk is a measure of thie
        minimum amount a financial portfolio is likely to lose over some period.
        This doesn’t mean you won’t lose more than that amount, just that this
        is probably the minimum amount. The VaR strength is understood like
        this. Say you have a 95% yearly VaR of $25,000. This means that your
        portfolio over an annual period is 5% likely to lose $25,000 or more.
        This risk measure is found by analyzing a portfolio for the historic
        stability of its investments (There are other ways to generate a risk
        model to measure VaR with, but I am not a financial expert).{" "}
      </Orator>
      <Orator>
        So ideally, you want to minimize the amount of value you have at risk.
        This means to build your portfolio to minimize your VaR, you must
        optimize over a set of financial choices you have to strengthen your
        outlook to a good VaR. For a more relaxed, large VaR (More accepting of
        loss) the optimization problem is easier, but for a strict, low VaR
        (Less accepting of loss) the problem is much harder.{" "}
      </Orator>
      <Orator>
        VaR has shortcomings, however. It does not account for sudden large
        losses that can occur outside the threshold set. VaR can only tell you
        whether you are likely to lose some amount of money by the end of some
        period, but once you’ve found a situation that goes beyond that limit,
        it’s hard to know the magnitude of loss that might occur.
      </Orator>
      <Orator>
        This is where CVaR enters the picture. It does exactly that by
        considering the average loss that occurs in situations beyond the
        threshold. This helps generate more robust portfolios in the event of
        sudden downturn (A situation found beyond the VaR threshold). However,
        not only is it harder to get data that allows you to build such a
        measure, but optimizing for it can be intractable quickly for portfolios
        that grow beyond a certain point.
      </Orator>
      <Orator>
        Why this sudden trek through the financial sector? Well, the situation
        found in making robust financial portfolios is the same situation we
        find ourselves in attempting to be careful with our use of VQE on
        quantum systems! Let’s remind ourselves that VQE is attempting to
        optimize parameters to some quantum circuit to generate a set that is
        close to the ground state energy of the Hamiltonian we are looking at.
        VQE finds this ground state by optimizing given the average of the
        samples produced. This leaves VQE susceptible to quantum noise in the
        circuit producing extreme suboptimal samples. This sounds analogous to
        our traditional Var optimization problem of not being aware of the
        magnitude of the loss outside our threshold. In this case, rather than
        reducing our financial loss, we are reducing the loss of accuracy that
        comes with not adjusting for the magnitude noise can have in generating
        very bad samples. By producing a CVaR score for our distribution of
        samples coming from our VQE circuit, we can instead optimize the
        parameters for lowering the CVaR. Not only do we gain resilience to
        noisy samples taking us off track, but we also prioritize samples that
        are actively lowering the CVaR, which in our quantum case means
        generating parameters that more often increase our likelihood of
        generating better samples.
      </Orator>
      <Orator>
        To be clear, we are not ignoring the Hamiltonian now, we still need to
        produce samples and measure their energy state to understand if we are
        finding better parameters, CVaR just augments our parameter tuning with
        a measure of how to produce better, less susceptible to noise, results.
      </Orator>
    </Box>
  )
}
