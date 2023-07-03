import axios from "@/utils/service"

export function getMovie(data: any) {
  return axios({
    url: `/entries`,
    method: "get",
    params: data,
  })
}

export function findMovie(data: any) {
  return axios({
    url: `/movie/findOneMovie`,
    method: "post",
    data,
  })
}

export function updateMovie(data: any) {
  return axios({
    url: `/movie/updateMovie/${data.id}`,
    method: "post",
    data: data.object,
  })
}

export function deleteMovie(data: any) {
  return axios({
    url: `/movie/deleteMovie/${data.id}`,
    method: "delete",
  })
}
