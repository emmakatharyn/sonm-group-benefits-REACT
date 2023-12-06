import { Link, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function StateEmployees() {
  return (
    <div>
      <h2>State Employees</h2>
      {/* Your content for State Employees */}
    </div>
  );
}

export function LPBEmployees() {
  return (
    <div>
      <h2>LPB Employees</h2>
      {/* Your content for LPB Employees */}
    </div>
  );
}

export function Employees() {
  return (
    <div className='container p-0 text-center'>
      <h1 className='my-4 ps-2 display-5'>Employee Information Resources</h1>
      <p clasNames='ps-2'>Please select one:</p>
      <div className='select-one-box py-5 my-3'>
        <button className='btn' id='iAmStateEE'>
          <Link to='/employees/state'>State Employees</Link>
        </button>

        <button className='btn' id='iAmLPBEE'>
          <Link to='/employees/lpb'>LPB Employees</Link>
        </button>
      </div>

      <Outlet />

      {/* <Switch>
        <Route path='/employees/state' component={StateEmployees} />
        <Route path='/employees/lpb' component={LPBEmployees} />
      </Switch> */}
    </div>
  );
}
