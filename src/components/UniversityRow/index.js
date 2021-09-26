import { Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import MouseOverPopover from "../../materialUi/popover";
function UniversityRow(props) {
  //material set up for popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  //my-code
  const history = useHistory();
  const {
    name,
    path,
    logoLink,
    address,
    benchMark,
    admissionBaseOnSchoolProfile,
  } = props;

  let isABOSF = false;
  if (
    admissionBaseOnSchoolProfile !== "" &&
    admissionBaseOnSchoolProfile !== undefined
  ) {
    isABOSF = true;
  }

  function handleRowClick(e) {
    let element = e.target.closest(".table-context");
    let name = element.getAttribute("data-name");
    history.push(`/universities/${name}`);
  }
  return (
    <tr className="table-context" onClick={handleRowClick} data-name={path}>
      <td>
        <Typography>{name}</Typography>
      </td>
      <td>{logoLink ? <img src={logoLink} alt="logo" /> : ""}</td>
      <td>
        <Typography
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          aria-owns={open ? "mouse-over-popover" : undefined}
        >
          {address}
        </Typography>
      </td>

      <td>
        <Typography>{benchMark}</Typography>
      </td>
      <MouseOverPopover
        open={open}
        anchorEl={anchorEl}
        onHandleClose={handlePopoverClose}
        text={address}
      />
    </tr>
  );
}

export default UniversityRow;
