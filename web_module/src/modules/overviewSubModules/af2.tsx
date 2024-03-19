import { Box, Link, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"

export function AF2() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Orator>
          Since attempting to provide a true series of molecular interaction
          calculations for a protein folding is intractable, approximate methods
          are used to produce mostly accurate interactions that can be improved
          iteratively. This provides a valuable mechanism that balances accuracy
          and speed. Ask for more iterative improvements steps, and like a
          limit, you will begin to approach the true answer, but at the cost of
          more time and computation strength.
        </Orator>
        <Orator>
          While it is a criticism of these methods that they aren’t perfect at
          predicting the lowest energy fold of proteins depending on their
          complexity or molecular makeup, they provide the unparalleled ability
          to give access to this kind of research to individuals and labs with
          less computing resources.
        </Orator>
        <Orator>
          To illustrate this benefit, we will look at Alpha Fold 2. Alpha fold 2
          represents one of the pinnacles of this classical computing technique
          applied to the task of protein folding. It uses deep learning and a
          cyclic neural architecture to produce high fidelity folds iteratively.
          Due to the proliferation of free and powerful computing hardware with
          Google’s Colab service, we can access Alpha Fold 2 directly via the
          web browser. While this version of Alpha Fold 2 is not the full
          system, it is a great look into the task we are trying to approach.
        </Orator>
        <Orator>
          As a result of web security limitations, I cannot place the colab in
          an interactive frame for viewing but I can link it here for you to
          open.
        </Orator>
        <Orator>
          <Link
            href="https://colab.research.google.com/github/sokrypton/ColabFold/blob/v1.2.0/AlphaFold2.ipynb"
            underline="hover"
          >
            Alpha Fold 2 Colabratory Notebook
          </Link>
        </Orator>
        <Orator>
          Uncomfortable interacting with raw links? Me too, searching for “Alpha
          Fold 2 Colab” in your search engine of choice should do the trick!
        </Orator>
      </Box>
    </>
  )
}
