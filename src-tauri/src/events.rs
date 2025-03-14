// Copyright 2024. The Tari Project
//
// Redistribution and use in source and binary forms, with or without modification, are permitted provided that the
// following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following
// disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the
// following disclaimer in the documentation and/or other materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote
// products derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
// INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
// USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

use serde::Serialize;
use std::collections::HashMap;

use crate::gpu_status_file::GpuDevice;

#[derive(Debug, Serialize, Clone)]
pub struct SetupStatusEvent {
    pub event_type: String,
    pub title: String,
    pub title_params: Option<HashMap<String, String>>,
    pub progress: f64,
}

#[derive(Debug, Serialize, Clone)]
pub struct ReleaseNotesHandlerEvent {
    pub release_notes: String,
    pub is_app_update_available: bool,
    pub should_show_dialog: bool,
}

#[derive(Debug, Serialize, Clone)]
pub struct ResumingAllProcessesPayload {
    pub title: String,
    pub stage_progress: u32,
    pub stage_total: u32,
    pub is_resuming: bool,
}

#[derive(Debug, Serialize, Clone)]
pub struct DetectedAvailableGpuEngines {
    pub engines: Vec<String>,
    pub selected_engine: String,
}

#[derive(Debug, Serialize, Clone)]
pub struct DetectedDevices {
    pub devices: Vec<GpuDevice>,
}
