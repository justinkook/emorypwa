import React from 'react';

const ResultContext = React.createContext({
    resultList: []
})

export const Provider = ResultContext.Provider;
export const Consumer = ResultContext.Consumer;