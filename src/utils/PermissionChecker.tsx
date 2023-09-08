

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


export const ForeignKeyToNameConverter = (tableData: any[], foreignKeyList: never[]) => {
    // Create an async function to process the data
    async function processData(foreignKeyList: never[]) {
        const result = {};
        for (const itemB of foreignKeyList) {
            const key = itemB.name;
            const values = tableData.map(itemA => itemA[key]);
            const nonRepeatValues = [...new Set(values)].join(',')
            const finalValues = nonRepeatValues ? await fetchAndParseData(itemB.api_link, nonRepeatValues) : null;
            result[key] = finalValues;
        }
        return result;
    }

    // Function to fetch and parse data from the API
    async function fetchAndParseData(apiLink: string, nonRepeatValues: string) {
        const response = await fetch(`${apiLink}?ids=${nonRepeatValues}`, {
            headers: {
                'Authorization': `Token ${localStorage.getItem('access_token')}`,
                'Content-Type': 'application/json'
            }
        });
        const resp = await response.json();
        return resp.results;
    }
    return processData(foreignKeyList)
}

