import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./components/private-route/PrivateRoute.compo";
import "./App.css";

import Entry from "./pages/entry/Entry.page";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-listing/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Entry />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/addticket"
            element={
              <PrivateRoute>
                <AddTicket />
              </PrivateRoute>
            }
          />
          <Route
            path="/tickets"
            element={
              <PrivateRoute>
                <TicketLists />
              </PrivateRoute>
            }
          />
          <Route
            path="/ticket/:tId"
            element={
              <PrivateRoute>
                <Ticket />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
