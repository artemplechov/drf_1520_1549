import React from 'react';


const TODOItem = ({TODO}) => {
    return (
        <tr>
            <td>
                {TODO.project}
            </td>
            <td>
                {TODO.note}
            </td>
            <td>
                {TODO.status}
            </td>
            <td>
                {TODO.modify_time}
            </td>
            <td>
                {TODO.user}
            </td>
        </tr>
    )
}

const TODOList = ({TODOs}) => {
    return (
        <table>
            <th>
                Project
            </th>
            <th>
                Note
            </th>
            <th>
                Status
            </th>
            <th>
                Modify time
            </th>
            <th>
                User
            </th>
            {TODOs.map((TODO) => <TODOItem TODO={TODO}/>)}
        </table>
    )
}

export default TODOList