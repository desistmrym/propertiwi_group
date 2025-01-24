import axiosInstance from ".";

const base_name = '/project';
const _acf = 'acf_format=standard';
const _field = '_fields=id,modified,slug,status,title,acf'

const getProject = () => {
    return axiosInstance.get(base_name+'?'+_acf+'&'+_field)
    .then(response => {
        return response
    })
    .catch(err => {
        return err;
    })
}

export {
    getProject
}