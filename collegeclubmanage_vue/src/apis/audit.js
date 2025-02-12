import request from '@/utils/http'

export const getClubRegPageAPI = (params) => {
    return request({
        url: '/audit/clubpage',
        method: 'GET',
        params
    })
}

export const updateRegStatusAPI = (params) => {
    return request({
        url: '/audit/aggreforclub',
        method: 'POST',
        data: { ...params }
    })
}