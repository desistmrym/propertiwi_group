const base_name = 'https://propertiwigroup.co.id/cms/wp-json/wp/v2/project';
const _acf = 'acf_format=standard';
const _field = '_fields=id,modified,slug,status,title,acf'

const getProject = () => {
    return fetch(base_name+'?'+_acf+'&'+_field)
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return err;
    })
}

const getProjectBySlug = (slug) => {
    return fetch(base_name + '?' + _acf + '&' + _field + '&slug='+slug)
    .then(response => {
        return response.json();
    })
    .catch(err => {
        return err;
    })
}

export {
    getProject,
    getProjectBySlug
}