const base_name = 'https://propertiwigroup.co.id/cms/wp-json/wp/v2/';
const _acf = 'acf_format=standard';
const _field = '_fields=id,modified,slug,status,title,acf';

const getBanner = () => {
    return fetch(base_name+'page-detail'+'?'+_acf+'&'+_field)
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return err;
    })
}

const getInformation = () => {
    return fetch(base_name+'information'+'?'+_acf+'&'+_field)
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return err;
    })
}

const getAward = () => {
    return fetch(base_name+'award'+'?'+_acf+'&'+_field)
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return err;
    })
}

const getParticipant = () => {
    return fetch(base_name+'participation'+'?'+_acf+'&'+_field)
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return err;
    })
}

const getContact = () => {
    return fetch(base_name+'contact'+'?'+_acf+'&'+_field)
    .then(response => {
        return response.json()
    })
    .catch(err => {
        return err;
    })
}

const postFeedback = (body) => {
    return fetch('https://propertiwigroup.co.id/cms/wp-json/contact-form-7/v1/contact-forms/139/feedback', {
        method: 'POST',
        body: body
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        return error;
    });
}

export {
    getBanner,
    getInformation,
    getAward,
    getParticipant,
    getContact,
    postFeedback
}