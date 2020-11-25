/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { updateField } from "../actions";
const { EXPERIENCE_INFO } = require("../actionTypes");

const initialState = [
  {
    id: 0,
    jobTitle: "",
    company: "",
    additionalInfo: "",
    start: "",
    end: "",
    location: "",
    description: ``,
    workLink: "",
  },
];

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPERIENCE_INFO.ADD: {
      return [
        ...state,
        {
          id: action.id,
          jobTitle: "",
          company: "",
          additionalInfo: "",
          start: "",
          end: "",
          location: "",
          description: ``,
          workLink: "",
        },
      ];
    }
    case EXPERIENCE_INFO.UPDATE: {
      return updateField(state, action);
    }
    default: {
      return state;
    }
  }
};

export default experienceReducer;