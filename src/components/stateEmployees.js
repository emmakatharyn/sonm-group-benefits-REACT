function StateEmployees() {
  return (
    <div class='container portal-grid my-5' id='state-ee-grid'>
      <a href='StateAgencyEmployee.html' class='btn btn-primary quicklink'>
        <i class='bx bxs-folder-plus'></i>
        <br />I am a New Hire
      </a>
      <a href='employeePortalSub2.html' class='btn btn-primary quicklink'>
        <i class='bx bxs-calendar-exclamation'></i>
        <br />I have a Qualifying Event
      </a>

      <a
        href='#'
        data-bs-target='#newHireOrientation'
        data-bs-toggle='modal'
        class='btn btn-primary quicklink'
      >
        <i class='bx bxs-info-circle'></i>
        <br />
        New Hire & Qualifying Event Orientation
      </a>
      <a href='benefitsInformation.html' class='btn btn-primary quicklink'>
        <i class='bx bxs-file-doc'></i>
        <br />
        Benefits Information
      </a>
      <a href='employeePortalSub3.html' class='btn btn-primary quicklink'>
        <i class='bx bx-book-open'></i>
        <br />
        SHARE Self Service Manual
      </a>
      <a href='AdministrativeLetters.html' class='btn btn-primary quicklink'>
        <i class='bx bxs-star'></i>
        <br />
        Special Rules: LWOP, FMLA and More
      </a>
      <a href='employerResourcesSub1.html' class='btn btn-primary quicklink'>
        <i class='bx bxs-file-pdf'></i>
        <br />
        Domestic Partnership Forms
      </a>
      <a
        href='/documents/POP-SoNM-NOTICE-OF-WAIVER-2023.pdf'
        class='btn btn-primary quicklink'
        target='_blank'
      >
        <i class='bx bxs-pen'></i>
        <br />
        POP Waiver Form (State)
      </a>
    </div>
  );
}

export default StateEmployees;
