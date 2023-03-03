import React from 'react'
import Styles from './Contact.module.css'

const contactObj = [
    {
        Image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAY1BMVEUAAAD////y8vJwcHBbW1uvr6+Ghoapqam6urrPz88aGhoFBQWlpaU8PDyhoaF4eHgQEBDi4uLHx8fq6uozMzNlZWUgICAtLS1VVVVJSUn5+flPT08VFRXZ2dl/f3+NjY2VlZWxP2T6AAAEY0lEQVRogcWb2YKqMAyGyw6iAyjgMoP6/k95wI1uSVuIp/+tymdD2iZpygJnhUWe3KK43dRlWW/aU5RmeRG6P4c5UrddXzKNyr7bOvId0E0SH3XUWcc4aejRh+xU49yn6lN2IEUXkQ32raggQydnF/Ckc0KCzqwMLavOVqPzReAHPF+FLpxNzeuMv3MMHaZrwJNSbKYj6H27lsxYu1+CXj3kp1Jn9GFHQ2ZsBy0xAHpPBZ4EGF2P/qEkM/ZjjyZ6zbO0L1yHrqjJjFV2aKetwlaRDforZB1bQX/B2k8pNpfR5B42S/Y1CU08q0T9YGjSlUTVHkYfvktm7ACiydZtSDsI/UUXe+umR3/5RT+116FDgsjArDbUoP+DuSelKrrAvh8PzZ2KPShoLPZ8rL8JEfpXRucmMh07l9BIpP9Z97G/56A/EZ1ZkMnYiYCGB30KONHY/I9HI4+8BPTsnEPD7i3nbCTs84yG5/QpkEXCLj5oOBzTRO8Uvla90fA2vVPJNOzDCw3PrLsOTcHOXugT+A0gN18fwcVPdANO6g1UBTPUz8z6ax5o2Gd3UFFg/daePNAx+Pn5oiejG6yd4gkdwtb71ZOb9WR2DEc0MgS9wSnIkwezYIv8NV0tAvZKJ21HdId8PmjIPQmZdSMae9T2a2TWByzUVtZfUvyMyNqjypChE6WULE6ZlBUMX5ClRZyQPIKRqIxNb4QXafadMEPSIUQp8D6zQCkzVG3OPJo0K6uYaSS8o62qjsuKmWkkfNHpTolu2cb0FW7YF0r0hhnXiJgbNmX2XzNsMXuKj0pvdOjSAi0EDHBc4Y62WJT5JS0kqzLVZjdj4gQbqNAb4+SaJKwrBIHZQy2zenl8uYvKzWPTQvqSsHnSZLoVs5suvRAWk+xgN2Y5hC6wY5vn6luJIVSYJRazgTA2Ggbryl+OB0jCVwW21liViycUeFgoSEzzNX/56uKFY1iIBsOCejHvHOQfXp1mQG9IAURJycjhV09Gq3AfdXjio/xTMfO8XLnPhLMki2dmeLqnqJXyv9m00gmamV3gSa6qo8RuXluAOO0tbP5Ict22YKXGsR130VjTjGHwtc5Q0NCpV0o7QOkBf2xiKONoVZr6TWxs/irjOCcVauqrF+Jrr+KV1TQUVAE2lnUHn/Au2bmnrq2m3KARfH71LlQuOS23MvoFypQ+5dlF4dbZoqMN3JDnovSyPM7Y1lVA0S5Xil8Ybf3inVUgWTiAwM6aMF0Rq8MBu3Ds4j6/PnCogov4j3jYtHTYo1Jt5Rp5hdIR26rKvtrE2GBbknywuK5YUVd7zvAF2tuiHKeuTqWO3bYYmmHIr4ZctFDQHo/OfTYMeGyT8Nkc4rMlxmcjkMf2J59NXz5b3Xw2+Plsa/TZzOmzhdVn467PdmWfTdo+W9MDjw35gc9rCD4vXwQer5xM8nbRZpK360WTvF2qmuTtKtkkbxfoHvJ1bfApX5clZ36epdHpfUU0jm7Joiui/wBiwzAOWS7/rgAAAABJRU5ErkJggg==",
        url: '+91 9108253546'
    },
    {
        Image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAYFBMVEUAAAD///+IiIj8/Pzb29uTk5Pf398nJyf09PTq6upbW1srKyvCwsJPT08cHByrq6sTExNgYGDT09O6uroiIiKbm5twcHA0NDR6enpAQECjo6NVVVVHR0fJyckLCwuysrLqXt0GAAADJ0lEQVRoge2a67aCIBCFQZQ0TYsupmW+/1uePFgpM5Z5uKyzFvtnWl+OzGYGINSliKd7uqd7uqd7uqcbpzOeFVFgSlGRcTZJ58F1S8xqew04Suc7w+SHdhzSA0vsToFC5yuLcEJWfEgXpt+3qq140blldif+oMd2wy61inv6yQGckJOk753ACdl39LhyRK/iO93Vo3cPT+jGGX1DSeIMTu5sd4G/h57Q4uCIfSi6jEvOTuDnpHdaUVpnl2Iwxx0tw4/j+T22abenGNQ2ja3wlw1W18XRzQL7FsUUo1Maro3D1+EQqNTzpr1nP8aBbsJkdRmoMNjLGAv/OOiSnoGPWJsbYOctA6RMOp6iRH/ynxCKdPgaXKBNqpWdNhBRPy6uxJuLGoQ8nhjW0SbDPx30p9IC/r9MR71ZwWFNC/heNxzcFUd/hg99tRfHK8kA5sTEnXOFPBGbtrMWRmm/vPA67OHPte++cEHCv9R7AyTolw/fQV6UWBL+DcziOcMIHaTfem++PIV28PHj7+reM/IL85eFjvCfi/nJXyHW+VXZWkJjZvW85ZVtDRP365oR88c53rv0e4rQgfNp6kt1DFmpDSxG2PukiWDQw+VuiYzdZHrs7mDQv8wVRTnmvXj4U8xX/1qjIbUg6r2Ir2qpT5GpD7xMbIhoqs0P2EAe3YGlh75FiTUyT7/G0xmpC/Q2BUguievvlSv01Q95uUAV4r3HnORHxFdNrD8iHsoj+EoMtCJSSF0OpLMPUIT1JOOg6+2BVCFtxyDoxtfeVkhu9yps7DIg3tvJwrKLFOK9unx1ltSp722ToF+XYfjDT02Cfj3bDg295gKVBWOUscL+EnOvau1qS8nLy8vrH8nGTtA028ROwFzlxN32+733JG62gKXOxHJNNFJLQof0kFBnpQkpKTHZeH1QfacnZluvaaVJtxfp6uHr351QZr8a73Rhch/WzZGbrhmWpz4cwAenPjLrcLkI1++AC7tT3a1f53rsvzObfv9c4Hvt/gtb3f/6tcA3PHsQBpXpF3CrgmHrrZyjDhuj56ibcPoctX15uqd7uqd7uqd7ugn9AFUeLaYReYGTAAAAAElFTkSuQmCC",
        url: 'shrikrishnaaluri641@gmail.com'
    },
    {
        Image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAY1BMVEUAAAD////n5+dERESnp6fx8fGMjIxkZGSxsbHW1tZWVlbr6+u0tLScnJwMDAz09PRJSUlbW1svLy/c3NyTk5MlJSXExMS9vb2Dg4NOTk4UFBTLy8s0NDQeHh5wcHA9PT17e3tX6h+iAAACu0lEQVR4nO2c23qCMAyAG1QUy0FEBOY8vP9TDty+TSChWEbKRf7L2ZVfWtI2pSoA0NFBOeEQ6fryCiCM3Qg0xGGjELoTaAhBaYf3oCHWKnJroGqBlWsFR4+CIAjvku9vfnm7fzgTqIoEnnhrNxL5BV5YOzDYb6BFcOQ2SKFLkPMaHJOeAlx4FYK+AcCJ02CLGUDCqXBGFaDkM8hxA87egLdD3RJ8D4VPKMAnm8KOUuCbYa7dK5TuG6Ifnb/Z8HXHHAnPDWc2A6UKXOHGqFChBprRgIjQjPG55qr7BgWrgVKrTdfgzL78v3ude+AgARG/humEtx/8cl1n3wIXRwIN8bG6bVfsc2dBEGbkI8+vzi6eV36RebrG87LilN7f+/d0i9CavF6xEi9XWRWdQQaSIHpn4tcbJxt2ryUOWInfhe8jwz6uQ306WqH7DZ60Mi390bzG//mMEHhKjF0ITFI40QIwftCdokAsy/8Yl6eYoDDQCGhF/69wQf7cY8x9sFYgV8RtqtkUSioz0cWb7y6g8QTD3BSWCsRaFEEbZ4OWCm/gu1cw9ob5FWDrXsEUnxgUTC3BoACzK+gsCDIkRfCHIWczUSHz98/k3Gca0aHC0BkmKXitzh5SxQwpkykK3ZcxqCxmNpyxmKDQT9cTo6chqW6vkCDfjegPw8OEvQI2MyQmk8MTWWsFNOBgm21gCtHWCviThu62GQKDtQK+VInQso9ZFDS+XYDP54anDLYKAV4dntMefpHJVoHYLsALD0doWwWi1qO5vn9TINaLV3SJtcMLT1R44NXFjApUtEEDwzwKVAaDUWEvCqIgCqIgCqIgCqIgCqIgCqIgCqIgCqKwHIURL5KgeWUqy4LmmoZPkZZ+n1Or/hwtQuX3H0hh37RTKQiCW5yfMT4s4aj3Ag68L+DY/xJ+/MD5T0B8AZVZLdLUGmsDAAAAAElFTkSuQmCC",
        url: 'https://www.linkedin.com/in/krishna-aluri-b9613515a/'
    },
    {
        Image: "data:image/png;base64,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",
        url: 'https://github.com/641krishna'
    },
    {
        Image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAZlBMVEX///8AAADy8vL4+Pj7+/uoqKglJSW4uLj19fVbW1tRUVFlZWXT09Po6OiFhYXZ2dkVFRU6OjqWlpbKyspBQUF4eHhMTEyLi4srKyucnJwcHBzh4eFtbW1GRkaysrLCwsINDQ0zMzME4AztAAADIklEQVR4nO2a15KDMAxFKSG0QEglWUj7/59cOsZxh1k0Ozpv8YhwkWS5WhaCIAiCIAiCIAjyX9kETuCu9XK3eOaXOIwe1yguc2/n/PH7E6982xTR8fSH7z/Qr+945zvVP3H8PIxKT9mepEi3HAGtL04bFQHprRN91RbhpKL3N8TyPz39EPapXjp7UgE1pSQ171PzA8s8YT+6vyopsO3sKVKQ0+Y/3xpKO2Q5x//qBHwufAUMT15pDbWfUgXxQs68YOwUFDtNxtOxcGMtBZV32Vnp3JjWHsNRR0pBpKmg0sCsVBe2cTb55EfTdptkQ6Drg4a9YhhqyFAUGeP50kQB9WnE97EoRqNn10RGguM9KR86J0982/L7g+NvVfrElARRPEc3DF8weDExVkBneiEyHeqAMzQNyaDfGQgm6SAcYG696Rgtv2u5Cx6TExIKHN4gP33hWD47xyTCsVmOP0oQJCOpNqVb5KOzmEMwSJB1LJfO2cPsXGwZM/IjsWwd5o7hugVLOKEq1P00ilsZe9rQB2NDVkw6iDl9NkjLy4Hqk7a9s1SnSWL6NJNX+aaY7omGV7VSmVUTeroOLzdsxtYX0eBPFZnTDjcbueGdjpe3TByqSGyUsrEbsY9EQz6zNo8kllpaNVNWsnpcujncfF61BIW5ZzOdJ7P2ouI7JXKV2lhTUBJCy19IQjitu2IJpN1jkhlzOFf56J4VDOteGRK/P8YTNpp6KhCo5FVVBzakhO1SHcLO9oql3qOWC5nFXnYYcDKU8LY0FpFiXooSqvIYTNbOClV9YQlHiBIABAJAOgLolABK06IFmr+oHvku0ACGKQCDNWdjSJsZUxYAEzcI09dlJvH3OZP4SSc1ZtZSBsCCDsKydoHF/bbfXjBc3EPY4gCw0QNhuwvAph+ErU8IG8AAtsHNDwOI3iBNSPFhAIQjEbODofeiB0PrHI9Rp9/rHxJaAI5KLQgHxhCOzdlfwHKB3uUBZsw4lwcsCFcoLNlFkrfuRZLI6DZL4vG2EDWv04SG12k6FeteKmpxC/+45tWqgVUvmCEIgiAIgiAIgiBw+QXTHju70S5usgAAAABJRU5ErkJggg==",
        url: 'https://medium.com/@shrikrishnaaluri641'
    },

]

function Contact() {
    return (
        <section id="contact">

            <div className={`${Styles.Contact}`}>
                <div>
                    <h1 className="heading">
                        Contact
                    </h1>
                </div>
                <div className={Styles.ContactSectionDiv}>
                    {contactObj.map(item =>
                        <a href={item.url} target="_blank">
                            <div className={Styles.ContactSection}>
                                <img id={Styles.icon} src={item.Image} alt="" />
                                <p>{item.url}</p>
                            </div>
                        </a>
                    )}
                </div>

            </div>

        </section>
    )
}

export default Contact


