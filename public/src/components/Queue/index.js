import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import QueueComponent from "./QueueComponent";

import { getFilteredMembersState, getQueueEntriesState } from "store/selectors";
import { selectSip } from "AC/sip";

import "./queue.css";

function mapStateToProps(state, props) {
  const getMembers = getFilteredMembersState();
  const getEntries = getQueueEntriesState();

  return {
    queueDetail: state.queue.getIn(["entities", props.entity, "params"]),
    queueMembers: getMembers(state, props.entity),
    queueEntries: getEntries(state, props.entity),
    selectedSip: state.sip.get("selectedSip")
  };
}

const enhance = compose(
  connect(
    mapStateToProps,
    {
      selectSip
    }
  )
);

export default enhance(QueueComponent);
