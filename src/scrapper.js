function scrapeData({ config, key }) {
  console.log(config, 'config')
  const result = []
  cards.forEach((card) => {
    let obj = {}
    const isVerified = card.querySelector(config?.isVerified)?.innerText
    const peopleUsed = card.querySelector(config?.peopleUsed)?.innerText
    let heading = card.querySelector(config?.heading)?.innerText
    let description = card.querySelector(config?.description)?.innerText

    let detailsList = []
    const details = card.querySelector(config.details)
    if (details) details.childNodes.forEach((item) => detailsList.push(item.innerText))
    detailsList = detailsList.filter(Boolean)
    if ([key][0].toString() === 'zoutons') {
      if (heading?.includes('|') || heading?.includes(':')) {
        description = heading?.split(/[:|]/g)[1].trim()
        heading = heading?.split(/[:|]/g)[0].trim()
      }
    }
    obj = Object.assign(obj, {
      heading,
      description,
      isVerified,
      detailsList,
      peopleUsed: +peopleUsed?.split(" ")[0]
        ? +peopleUsed?.split(" ")[0]
        : "null",
    })
    result.push(obj)
  })
  return result
}
