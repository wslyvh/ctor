import React from "react";

interface IContractFunctionProps {
    functionObject: any;
    type: string;
}

const ContractFunction: React.SFC<IContractFunctionProps> = (props) => {
    let classType = "alert alert-primary";
    let badgeType = "badge badge-primary";
    switch (props.type) {
        case "function":
            classType = "alert alert-success";
            badgeType = "badge badge-success";
            break;
        case "event":
            classType = "alert alert-warning";
            badgeType = "badge badge-warning";
            break;
        default:
            classType = "alert alert-primary";
            badgeType = "badge badge-primary";
    }

    return (

        <div className={classType} role="alert">
            <span className={badgeType}>{props.type}</span> &nbsp;
            <strong>{props.functionObject.name}</strong> &nbsp;

            {props.functionObject.inputs.map(function (input: any, index: any) {
                return (
                    <small key={index}>{input.name} ({input.type}) &nbsp;</small>
                )
            })}
        </div>
    );
}

export default ContractFunction;
