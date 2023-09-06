

export const PermissionChecker = (pathname: string, userPermission: string[]) => {
    const splitPath = pathname.split('/');
    const appName = splitPath[2];
    const modalName = splitPath[3];
    const createPermissionAdd = `${appName}.add_${modalName}`;
    const createPermissionDelete = `${appName}.delete_${modalName}`;
    const createPermissionChange = `${appName}.change_${modalName}`;
    const permissionCheckDelete = userPermission.filter(i => i.includes(createPermissionDelete));
    const permissionCheckAdd = userPermission.filter(i => i.includes(createPermissionAdd));
    const permissionCheckChange = userPermission.filter(i => i.includes(createPermissionChange));
    return ({
        permissionCheckDelete, permissionCheckAdd, permissionCheckChange
    })
}

