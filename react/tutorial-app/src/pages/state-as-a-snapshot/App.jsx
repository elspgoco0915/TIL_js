import TrafficLight from "../../components/state-as-a-snapshot/TrafficLight";
import { InvalidCounter, ValidCounters } from "../../components/state-as-a-snapshot/Counters";
import RequestTracker from "../../components/state-as-a-snapshot/RequestTracker";

const App = () => {

  return (
    <>
      <h1>state-as-a-snapshot</h1>
      <TrafficLight />
      <hr />
      <h1>queueing-a-series-of-state-updates</h1>
      <h2>Counters</h2>
      <InvalidCounter />
      <ValidCounters />
      <RequestTracker />
    </>
  )

}

export default App;