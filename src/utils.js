import dayjs from "dayjs";
const fetchJSON = (...args) => fetch(...args).then((res) => res.json());
const api = {
    onair: fetchJSON("https://cors.eu.org/https://bgmlist.com/api/v1/bangumi/onair").then((data) => data.items),
};
const formatDate = (str, tpl) => dayjs(str).format(tpl);

export { api, formatDate };
