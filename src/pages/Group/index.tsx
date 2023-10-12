import React from 'react'
import { PermissionChecker } from '../../utils/PermissionChecker'


const Group = ({ routeDetails, userPermission, pathname }) => {

    console.log("This is user permission and pathname", userPermission, pathname)
    const { permissionCheckDelete, permissionCheckAdd, permissionCheckChange } = PermissionChecker(pathname, userPermission)
    console.log("Component basis pathname", permissionCheckAdd, permissionCheckChange, permissionCheckDelete)
    return (
        <div>
            {
                permissionCheckAdd.length ? <button type='button'>Create</button> : ''}
            {
                permissionCheckChange.length ? <button type='button'>Edit</button> : ''}
            {
                permissionCheckDelete.length ? <button type='button'>Delete</button> : ''}

            <h2>This is data</h2>
        </div>
    )
}

export default Group