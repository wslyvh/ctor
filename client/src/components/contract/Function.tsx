import React from "react";

interface IContractFunctionProps {
    functionObject: any;
    type: string;
}

const ContractFunction: React.SFC<IContractFunctionProps> = (props) => {
    let classType = "alert alert-primary";
    let badgeType = "badge badge-primary";

    switch (props.type) {
        case "constructor":
            classType = "alert alert-secondary";
            badgeType = "badge badge-secondary";
            break;

        case "function":
            classType = "alert alert-success";
            badgeType = "badge badge-success";
            break;

        case "event":
            classType = "alert alert-warning";
            badgeType = "badge badge-warning";
            break;
    }

    return (

        <div className={classType} role="alert">
            <span className={badgeType}>{props.type}</span>
            <strong> {props.functionObject.name} </strong>

            { props.functionObject.inputs.map((input: any, index: any) => {
                return (
                    <small key={index}>{input.name} ({input.type}) &nbsp;</small>
                );
            })}
        </div>
    );
};

export default ContractFunction;
