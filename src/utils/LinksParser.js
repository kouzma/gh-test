
const LINK_REG_EXP = /<(.*)>; rel="(.*)"/;

export default function parseLinks(linksStr) {
    const links = {};
    if (!linksStr)
        return links;

    linksStr.split(",").forEach(
        link => {
            const arrResult = LINK_REG_EXP.exec(link);
            links[arrResult[2]] = arrResult[1];
        }
    );
    return links;
}