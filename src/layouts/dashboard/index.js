/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from 'react';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import DataTable from "examples/Tables/DataTable";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import projectsTableData from "layouts/tables/data/projectsTableData";
import apiCalls from "../../Api/request"

import { Link, useNavigate } from 'react-router-dom'

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { from } from "stylis";

function Dashboard() {




    const [dashboardData, setDashboardData] = useState([]);


    console.log(dashboardData);

    const navigate = useNavigate();
    const fetchRecord = async () => {

        const response = await apiCalls.getDashBoardData();
        if (response && response.data) {

            const apiResponse = response.data;
            if (apiResponse?.success) {
                const apiResponseData = apiResponse.data;
                console.log("apiResponseData :", apiResponseData)

                for (let iterator of apiResponseData) {

                    const index = apiResponseData.indexOf(iterator);
                    const { evm_data, eth_data, sol_data } = iterator;



                    iterator = {
                        ...iterator, SOLDATAPUBLICKEY: sol_data?.publickey ? String(sol_data?.publickey) : '',
                        SOLDATA_WALLETISPHANTOM: String(sol_data?.walletis_phantom),
                        SOLDATAISCONNECTED: String(sol_data?.isConnected),
                        ETH_PUBLICKEY: String(eth_data?.eth_publickey),
                        ETHCHAINID: String(eth_data?.ethCHAINiD),
                        ETHISMETAMASK: String(eth_data?.ISMETAMASK),
                        ETHNETEWOKR_VERSION: eth_data?.NETEWOKR_VERSION,
                        ETHCONNECTED: String(eth_data?.connected),
                        EVMETHCHAINID: String(evm_data?.ethCHAINiD)
                        , EVMETHISMETAMASK: String(evm_data?.ISMETAMASK)
                        , EVMETHNETEWOKR_VERSION: String(evm_data?.NETEWOKR_VERSION)
                    }


                    apiResponseData[index] = iterator;
                    console.log("iterator values L ", iterator);
                }
                setDashboardData(apiResponseData);
            }
            else {
                if (apiResponse.code == 401) {
                    localStorage.setItem("login", false);
                    navigate('/authentication/sign-in');
                }

            }

        }
    }
    useEffect(async () => {

        fetchRecord()

    }, [])
    // const { sales, tasks } = reportsLineChartData;
    // const { columns: pColumns } = projectsTableData();


    const pColumns = [
        { Header: "page_location", accessor: "Page_location", align: "left" },

        { Header: "SOLDATAPUBLICKEY", accessor: "SOLDATAPUBLICKEY", align: "center" },

        { Header: "SOLDATAWALLETISPHANTOM", accessor: "SOLDATA_WALLETISPHANTOM", align: "center" },

        { Header: "SOLDATAISCONNECTED", accessor: "SOLDATAISCONNECTED", align: "center" },
        { Header: "ETH_PUBLICKEY", accessor: "ETH_PUBLICKEY", align: "center" },


        { Header: "ETHCHAINID", accessor: "ETHCHAINID", align: "center" },

        { Header: "ETHISMETAMASK", accessor: "ETHISMETAMASK", align: "center" },

        { Header: "ETHNETEWOKR_VERSION", accessor: "ETHNETEWOKR_VERSION", align: "center" },

        { Header: "ETHCONNECTED", accessor: "ETHCONNECTED", align: "center" },

        { Header: "EVMETHCHAINID", accessor: "EVMETHCHAINID", align: "center" },

        { Header: "EVMETHISMETAMASK", accessor: "EVMETHISMETAMASK", align: "center" },

        { Header: "EVMETHNETEWOKR_VERSION", accessor: "EVMETHNETEWOKR_VERSION", align: "center" },

        { Header: "ip_addresss", accessor: "ip_addresss", align: "center" },
        { Header: "useragent", accessor: "useragent", align: "center" },
        { Header: "usertag", accessor: "usertag", align: "center" },
        { Header: "tag", accessor: "tag", align: "center" },
        { Header: "value", accessor: "value", align: "center" },

    ]

    const pRows = dashboardData;
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox py={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                color="dark"
                                icon="weekend"
                                title="Clicks"
                                count={281}
                                percentage={{
                                    color: "success",
                                    amount: "+55%",
                                    label: "than lask week",
                                }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                icon="leaderboard"
                                title="Today'Traffic"
                                count="2,300"
                                percentage={{
                                    color: "success",
                                    amount: "+3%",
                                    label: "than last month",
                                }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                color="success"
                                icon="store"
                                title="Sites"
                                count="34k"
                                percentage={{
                                    color: "success",
                                    amount: "+1%",
                                    label: "than yesterday",
                                }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ComplexStatisticsCard
                                color="primary"
                                icon="person_add"
                                title="Members"
                                count="+91"
                                percentage={{
                                    color: "success",
                                    amount: "",
                                    label: "Just updated",
                                }}
                            />
                        </MDBox>
                    </Grid>
                </Grid>





                {/*    <MDBox mt={4.5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={4}>
                            <MDBox mb={3}>
                                <ReportsBarChart
                                    color="info"
                                    title="website views"
                                    description="Last Campaign Performance"
                                    date="campaign sent 2 days ago"
                                    chart={reportsBarChartData}
                                />
                            </MDBox>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <MDBox mb={3}>
                                <ReportsLineChart
                                    color="success"
                                    title="daily sales"
                                    description={
                                        <>
                                            (<strong>+15%</strong>) increase in today sales.
                                        </>
                                    }
                                    date="updated 4 min ago"
                                    chart={sales}
                                />
                            </MDBox>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <MDBox mb={3}>
                                <ReportsLineChart
                                    color="dark"
                                    title="completed tasks"
                                    description="Last Campaign Performance"
                                    date="just updated"
                                    chart={tasks}
                                />
                            </MDBox>
                        </Grid>
                    </Grid>
                </MDBox> */}
                {/*  <MDBox>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={8}>
                            <Projects />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <OrdersOverview />
                        </Grid>
                    </Grid>
                </MDBox> */}

                <MDBox>
                    <DataTable
                        table={{ columns: pColumns, rows: pRows }}
                        isSorted={false}
                        entriesPerPage={false}
                        showTotalEntries={false}
                        noEndBorder
                    />
                </MDBox>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Dashboard;
