import { Box, Typography } from "@mui/material"
import { Orator } from "../../components/Orator"
import { Presenter } from "../../components/Presenter"
import { Photograph } from "../../components/Photograph"

export function WQC() {
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
          Before we can begin discussing quantum computing it is valuable to
          understand the opposing form of computation that we are all far more
          used to, classical computing. Classical computing begins all the way
          from the humble bit. By encoding mathematics into a series of yes or
          no’s we can encode all the work necessary to make modern computing
          accomplish what it does. Everything digital computing has accomplished
          up to this modern day has been done via this bit that can store only
          the discrete values 1 and 0.
        </Orator>
        <Orator>
          An important parallel to our discussion is that there are non-digital,
          analog computers that perform work such as old speedometers and
          mercury temperature gauges, but we don’t typically understand what
          they are doing to be “computation”. However, they produce values just
          as a digital computer does by ordering a sequence of events in such a
          manner that the output is something useful. The fundamental difference
          between digital computers and analog devices is that analog operate
          with continuous, non-discrete values. With this understanding, analog
          computers produce values of infinite accuracy and are instead measured
          by an external process to give useful values.
        </Orator>
        <Orator>
          In the case of a mercury temperature gauge, the computation being
          performed takes advantage of chemical properties to expand, and
          contract, a known volume of mercury. When the mercury increases in
          volume, we know that the temperature must have gone up since imparting
          thermal energy into a stable pressure system decreases its density.
          Put another way, we’ve assembled an analog system that “computes” and
          displays changes in temperature. However, analog devices are tricky
          because we can’t know their actual, infinite accuracy inputs (Which
          for the mercury gauge would be the exact amount of thermal energy
          interacting) and outputs (Which for the mercury gauge would be the
          exact amount of volume expanded from the density change) because we
          don’t have systems that can measure to infinite accuracy. Instead, a
          specific accuracy of values is guaranteed, and the rest are understood
          to be untrustworthy due to the system of measurement. Hence why when
          looking at the mercury gauge you can see that the volume is sometimes
          clearly a bit lower or higher than one of the temperature lines, but
          the actual number can’t be given due to accuracy issues.
        </Orator>
        <Photograph
          link={process.env.PUBLIC_URL + "/VQE-mercury-thermometer.jpg"}
          footerInfo={{
            owner: "Ivan Radic",
            imgName:
              "Mercury thermometer on a cup of tea. Riding out Coronavirus at home",
            imgLink: "https://flic.kr/p/2kJXYHt",
            license: "BY",
          }}
        />
        <Orator>
          As a small aside, this is why significant digits and calculated errors
          are so important in science fields, since preforming experiments is
          essentially trying to measure the output of some analog computation!
          With that lengthy background in place, we now have a strong foundation
          for looking at quantum computing.
        </Orator>
        <Orator>
          Quantum computing derives all its difference from classical computing
          at the very foundational level by replacing the bit with a qubit,
          Short for quantum bit, a single qubit stores both 1 and 0, as a
          classical bit does, and every continuous value in between. This means
          that a qubit is essentially an analog version of a normal bit. This
          means that quantum computers can store information far more “densely”
          since a single qubit carries an order of magnitude more potential
          information than a single bit. To use storing mathematical values as
          an example, rather than encoding numbers in binary, which is
          essentially a series of yes or no questions as to whether we include a
          power of 2 or not to be added to a total, a qubit could encode any
          integer value by directly storing the position between 0 and 1 that
          represents it. Unfortunately, this is not for free however, as a
          quantum computer would need hardware that could accurately read values
          stored to some level, which is the analog computer’s measurement
          problem from earlier. However, storing things in this manner is not
          useful for solving more complex problems, for that we still need to
          answer yes or no questions.
        </Orator>
        <Orator>
          Quantum computers use the qubit’s range of values not to store
          something at each point in between but rather to act as a measure of
          certainty between the answer being yes or no (reading a 0 or 1). To
          put this another way, we can think of a qubit as being able to be in
          both 0 and 1 states at once with a percentage likelihood of being in
          either. As an example, a qubit can rest in a state of being 80% likely
          to be a 1 and 20% likely to be a 0. How is this possible? Without
          getting into the actual quantum physics, the answer lies in that we
          cannot actually “see” the qubits value propagate through a circuit
          like a classical bit’s value can. To help make this a bit clearer we
          will use the example of a mouse in a maze trying to get some cheese.
        </Orator>
        <Photograph />
        <Orator>
          Let’s say there are multiple paths that lead to different piles of
          cheese. Analogous to a classical circuit, if our maze had a glass roof
          and we could watch the mouse make each of its turns, we can know with
          certainty where the mouse is. Will the mouse end up at the third
          cheese pile we placed or the first? We are unsure but since we can
          observe the entire process there is never doubt in the state of the
          mouse, or in a classical circuit, the bit’s value. However, imagine we
          painted the whole glass roof black except for some select few turns we
          are interested in and then we set the mouse free. This situation may
          feel the same, but it is not. We watched the mouse go in and now we
          are unsure of where it went. Did it take a left turn? Did it make a
          right? Is it headed toward one of the windows we can view from? We
          aren’t sure, but we can give a probabilistic measure of where the
          mouse might be by imagining the mouse duplicates itself at every
          possible turn. Given this we might find that certain paths have a
          greater chance of having the mouse than others, but we aren’t sure
          unless we remove some of the paint and check or wait until it passes
          one of the windows. The mouse’s state is unknown and is now in
          multiple states at once with different probabilities. This is the
          concept of a superposition. This situation seems to imply that there
          is actually only one mouse, and we are just making “ghost” mice to
          make ourselves feel better, but to cut a long story short, quantum
          physics has actually confirmed this “mice splitting” (The actual
          existence of a single object in two states at once) does actually
          occur in real life.
        </Orator>
        <Orator>
          This superposition of states allows quantum computers to operate on
          all possible combinations of 1’s and 0’s possible at each step of
          computation. Put another way, when we are trying to solve a series of
          yes or no questions in order, we can proceed at each step answering
          both yes and no and then operating on the ramifications of both.
        </Orator>
        <Orator>
          A fair question at this point is why is any of the useful to
          computational biology? Well, protein folding is about taking a
          1-dimensional string of amino acids and partially folding it step by
          step until it reaches its lowest energy conformation. There is a
          completely intractable search space worth of potentially folds to
          check, which was formalized in Levinthal’s paradox. A classical
          supercomputer attempting to search this space one at a time even for
          very small proteins would take longer than the death of the universe.
          However, qubits can encode the many different possible states at once
          and operate on all of them, determining which bad folds to throw out
          as it proceeds with better ones. It has been proven directly that a
          qubit architecture for solving protein folding can reduce the
          asymptotic space complexity from and intractable 2^n to a tractable
          n^3. While improving the storage complexity of data for a problem is a
          crucial benefit, can we reduce the runtime complexity as well?
        </Orator>
        <Orator>
          Unfortunately, we are unsure as to whether a quantum computer is a
          more powerful system computationally than a classical one. However,
          quantum computers still have more benefits to give runtime. Analogous
          to what parallelism did for classical computing, quantum computers
          also have parallelism baked in. Where classical computing requires
          multiple unique computing cores to represent parallelism with some
          form of communication, quantum computers can do this inherently at a
          much lower level, the actual qubit. To use our mouse example from
          before, classical parallelism speeds up computation by making another
          maze, mouse, and cheese experiment to run alongside each other,
          requiring synchronization and communication between the two sets of
          researchers watching the mice. Quantum computers on the other hand can
          track all the potential decisions the original mouse makes in just one
          maze inherently. It is this quantum parallelism that is that major
          crux of quantum advantage, the hypothesis that quantum computers are
          computationally more capable than classical computers.
        </Orator>
        <Orator>
          With all this said, it should hopefully be a bit clearer as to why so
          much research is being poured into this new field of computing and
          especially why computational biologists are some of the most
          interested individuals in this field.
        </Orator>
      </Box>
    </>
  )
}
