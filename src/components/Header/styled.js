import styled from "styled-components";

export const AreaHeader = styled.div`
    height: 60px;

    color: #FFFFFF;
    background: #791E94;

    .container {
        padding: 5px 20px;

        display: flex;
        align-items: center;
    }
        .logo {
                flex: 1;

                img {
                    width: 120px;
                }
            }

        nav {

            ul {
                display: flex;

                li {
                    list-style: none;
                    margin-left: 20px;
                }
            }
         }
`;