// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.14.0
// source: mesh/v1alpha1/mesh_insight.proto

package v1alpha1

import (
	_ "github.com/kumahq/kuma/api/mesh"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// MeshInsight defines the observed state of a Mesh.
type MeshInsight struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// last_sync is a time of the last synchronization
	LastSync   *timestamppb.Timestamp             `protobuf:"bytes,1,opt,name=last_sync,json=lastSync,proto3" json:"last_sync,omitempty"`
	Dataplanes *MeshInsight_DataplaneStat         `protobuf:"bytes,2,opt,name=dataplanes,proto3" json:"dataplanes,omitempty"`
	Policies   map[string]*MeshInsight_PolicyStat `protobuf:"bytes,3,rep,name=policies,proto3" json:"policies,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	DpVersions *MeshInsight_DpVersions            `protobuf:"bytes,4,opt,name=dpVersions,proto3" json:"dpVersions,omitempty"`
}

func (x *MeshInsight) Reset() {
	*x = MeshInsight{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_mesh_insight_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MeshInsight) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MeshInsight) ProtoMessage() {}

func (x *MeshInsight) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_mesh_insight_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MeshInsight.ProtoReflect.Descriptor instead.
func (*MeshInsight) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_mesh_insight_proto_rawDescGZIP(), []int{0}
}

func (x *MeshInsight) GetLastSync() *timestamppb.Timestamp {
	if x != nil {
		return x.LastSync
	}
	return nil
}

func (x *MeshInsight) GetDataplanes() *MeshInsight_DataplaneStat {
	if x != nil {
		return x.Dataplanes
	}
	return nil
}

func (x *MeshInsight) GetPolicies() map[string]*MeshInsight_PolicyStat {
	if x != nil {
		return x.Policies
	}
	return nil
}

func (x *MeshInsight) GetDpVersions() *MeshInsight_DpVersions {
	if x != nil {
		return x.DpVersions
	}
	return nil
}

// DataplaneStat defines statistic specifically for Dataplane
type MeshInsight_DataplaneStat struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Total             uint32 `protobuf:"varint,1,opt,name=total,proto3" json:"total,omitempty"`
	Online            uint32 `protobuf:"varint,2,opt,name=online,proto3" json:"online,omitempty"`
	Offline           uint32 `protobuf:"varint,3,opt,name=offline,proto3" json:"offline,omitempty"`
	PartiallyDegraded uint32 `protobuf:"varint,4,opt,name=partially_degraded,json=partiallyDegraded,proto3" json:"partially_degraded,omitempty"`
}

func (x *MeshInsight_DataplaneStat) Reset() {
	*x = MeshInsight_DataplaneStat{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_mesh_insight_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MeshInsight_DataplaneStat) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MeshInsight_DataplaneStat) ProtoMessage() {}

func (x *MeshInsight_DataplaneStat) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_mesh_insight_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MeshInsight_DataplaneStat.ProtoReflect.Descriptor instead.
func (*MeshInsight_DataplaneStat) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_mesh_insight_proto_rawDescGZIP(), []int{0, 0}
}

func (x *MeshInsight_DataplaneStat) GetTotal() uint32 {
	if x != nil {
		return x.Total
	}
	return 0
}

func (x *MeshInsight_DataplaneStat) GetOnline() uint32 {
	if x != nil {
		return x.Online
	}
	return 0
}

func (x *MeshInsight_DataplaneStat) GetOffline() uint32 {
	if x != nil {
		return x.Offline
	}
	return 0
}

func (x *MeshInsight_DataplaneStat) GetPartiallyDegraded() uint32 {
	if x != nil {
		return x.PartiallyDegraded
	}
	return 0
}

// PolicyStat defines statistic for all policies in general
type MeshInsight_PolicyStat struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Total uint32 `protobuf:"varint,1,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *MeshInsight_PolicyStat) Reset() {
	*x = MeshInsight_PolicyStat{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_mesh_insight_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MeshInsight_PolicyStat) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MeshInsight_PolicyStat) ProtoMessage() {}

func (x *MeshInsight_PolicyStat) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_mesh_insight_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MeshInsight_PolicyStat.ProtoReflect.Descriptor instead.
func (*MeshInsight_PolicyStat) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_mesh_insight_proto_rawDescGZIP(), []int{0, 1}
}

func (x *MeshInsight_PolicyStat) GetTotal() uint32 {
	if x != nil {
		return x.Total
	}
	return 0
}

// DpVersions defines statistics grouped by dataplane versions
type MeshInsight_DpVersions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Dataplane stats grouped by KumaDP version
	KumaDp map[string]*MeshInsight_DataplaneStat `protobuf:"bytes,1,rep,name=kumaDp,proto3" json:"kumaDp,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Dataplan stats grouped by Envoy version
	Envoy map[string]*MeshInsight_DataplaneStat `protobuf:"bytes,2,rep,name=envoy,proto3" json:"envoy,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *MeshInsight_DpVersions) Reset() {
	*x = MeshInsight_DpVersions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mesh_v1alpha1_mesh_insight_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MeshInsight_DpVersions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MeshInsight_DpVersions) ProtoMessage() {}

func (x *MeshInsight_DpVersions) ProtoReflect() protoreflect.Message {
	mi := &file_mesh_v1alpha1_mesh_insight_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MeshInsight_DpVersions.ProtoReflect.Descriptor instead.
func (*MeshInsight_DpVersions) Descriptor() ([]byte, []int) {
	return file_mesh_v1alpha1_mesh_insight_proto_rawDescGZIP(), []int{0, 3}
}

func (x *MeshInsight_DpVersions) GetKumaDp() map[string]*MeshInsight_DataplaneStat {
	if x != nil {
		return x.KumaDp
	}
	return nil
}

func (x *MeshInsight_DpVersions) GetEnvoy() map[string]*MeshInsight_DataplaneStat {
	if x != nil {
		return x.Envoy
	}
	return nil
}

var File_mesh_v1alpha1_mesh_insight_proto protoreflect.FileDescriptor

var file_mesh_v1alpha1_mesh_insight_proto_rawDesc = []byte{
	0x0a, 0x20, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f,
	0x6d, 0x65, 0x73, 0x68, 0x5f, 0x69, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x12, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31,
	0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x1a, 0x12, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x6f, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x8d, 0x08, 0x0a, 0x0b,
	0x4d, 0x65, 0x73, 0x68, 0x49, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x12, 0x37, 0x0a, 0x09, 0x6c,
	0x61, 0x73, 0x74, 0x5f, 0x73, 0x79, 0x6e, 0x63, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x08, 0x6c, 0x61, 0x73, 0x74,
	0x53, 0x79, 0x6e, 0x63, 0x12, 0x4d, 0x0a, 0x0a, 0x64, 0x61, 0x74, 0x61, 0x70, 0x6c, 0x61, 0x6e,
	0x65, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e,
	0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4d, 0x65,
	0x73, 0x68, 0x49, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x70, 0x6c,
	0x61, 0x6e, 0x65, 0x53, 0x74, 0x61, 0x74, 0x52, 0x0a, 0x64, 0x61, 0x74, 0x61, 0x70, 0x6c, 0x61,
	0x6e, 0x65, 0x73, 0x12, 0x49, 0x0a, 0x08, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x69, 0x65, 0x73, 0x18,
	0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73,
	0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4d, 0x65, 0x73, 0x68, 0x49,
	0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x2e, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x69, 0x65, 0x73, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x52, 0x08, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x69, 0x65, 0x73, 0x12, 0x4a,
	0x0a, 0x0a, 0x64, 0x70, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4d, 0x65, 0x73, 0x68, 0x49, 0x6e, 0x73, 0x69,
	0x67, 0x68, 0x74, 0x2e, 0x44, 0x70, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x0a,
	0x64, 0x70, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x1a, 0x86, 0x01, 0x0a, 0x0d, 0x44,
	0x61, 0x74, 0x61, 0x70, 0x6c, 0x61, 0x6e, 0x65, 0x53, 0x74, 0x61, 0x74, 0x12, 0x14, 0x0a, 0x05,
	0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x05, 0x74, 0x6f, 0x74,
	0x61, 0x6c, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x6e, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x06, 0x6f, 0x6e, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6f, 0x66,
	0x66, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x07, 0x6f, 0x66, 0x66,
	0x6c, 0x69, 0x6e, 0x65, 0x12, 0x2d, 0x0a, 0x12, 0x70, 0x61, 0x72, 0x74, 0x69, 0x61, 0x6c, 0x6c,
	0x79, 0x5f, 0x64, 0x65, 0x67, 0x72, 0x61, 0x64, 0x65, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x11, 0x70, 0x61, 0x72, 0x74, 0x69, 0x61, 0x6c, 0x6c, 0x79, 0x44, 0x65, 0x67, 0x72, 0x61,
	0x64, 0x65, 0x64, 0x1a, 0x22, 0x0a, 0x0a, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x53, 0x74, 0x61,
	0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x1a, 0x67, 0x0a, 0x0d, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x69, 0x65, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x40, 0x0a, 0x05, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x6b, 0x75, 0x6d, 0x61,
	0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4d,
	0x65, 0x73, 0x68, 0x49, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x2e, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x79, 0x53, 0x74, 0x61, 0x74, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01,
	0x1a, 0xfc, 0x02, 0x0a, 0x0a, 0x44, 0x70, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x12,
	0x4e, 0x0a, 0x06, 0x6b, 0x75, 0x6d, 0x61, 0x44, 0x70, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x36, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2e, 0x4d, 0x65, 0x73, 0x68, 0x49, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74,
	0x2e, 0x44, 0x70, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x4b, 0x75, 0x6d, 0x61,
	0x44, 0x70, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x6b, 0x75, 0x6d, 0x61, 0x44, 0x70, 0x12,
	0x4b, 0x0a, 0x05, 0x65, 0x6e, 0x76, 0x6f, 0x79, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x35,
	0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x2e, 0x4d, 0x65, 0x73, 0x68, 0x49, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x2e,
	0x44, 0x70, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x45, 0x6e, 0x76, 0x6f, 0x79,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x05, 0x65, 0x6e, 0x76, 0x6f, 0x79, 0x1a, 0x68, 0x0a, 0x0b,
	0x4b, 0x75, 0x6d, 0x61, 0x44, 0x70, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b,
	0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x43, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x6b,
	0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73, 0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x4d, 0x65, 0x73, 0x68, 0x49, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x2e, 0x44, 0x61,
	0x74, 0x61, 0x70, 0x6c, 0x61, 0x6e, 0x65, 0x53, 0x74, 0x61, 0x74, 0x52, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x67, 0x0a, 0x0a, 0x45, 0x6e, 0x76, 0x6f, 0x79, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x43, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x6b, 0x75, 0x6d, 0x61, 0x2e, 0x6d, 0x65, 0x73,
	0x68, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x4d, 0x65, 0x73, 0x68, 0x49,
	0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x70, 0x6c, 0x61, 0x6e, 0x65,
	0x53, 0x74, 0x61, 0x74, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x3a,
	0x4a, 0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x15, 0x0a, 0x13, 0x4d, 0x65, 0x73, 0x68, 0x49, 0x6e, 0x73,
	0x69, 0x67, 0x68, 0x74, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0xaa, 0x8c, 0x89, 0xa6,
	0x01, 0x0d, 0x12, 0x0b, 0x4d, 0x65, 0x73, 0x68, 0x49, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0xaa,
	0x8c, 0x89, 0xa6, 0x01, 0x02, 0x18, 0x01, 0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x06, 0x22, 0x04, 0x6d,
	0x65, 0x73, 0x68, 0xaa, 0x8c, 0x89, 0xa6, 0x01, 0x02, 0x28, 0x01, 0x42, 0x2a, 0x5a, 0x28, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6b, 0x75, 0x6d, 0x61, 0x68, 0x71,
	0x2f, 0x6b, 0x75, 0x6d, 0x61, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x6d, 0x65, 0x73, 0x68, 0x2f, 0x76,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_mesh_v1alpha1_mesh_insight_proto_rawDescOnce sync.Once
	file_mesh_v1alpha1_mesh_insight_proto_rawDescData = file_mesh_v1alpha1_mesh_insight_proto_rawDesc
)

func file_mesh_v1alpha1_mesh_insight_proto_rawDescGZIP() []byte {
	file_mesh_v1alpha1_mesh_insight_proto_rawDescOnce.Do(func() {
		file_mesh_v1alpha1_mesh_insight_proto_rawDescData = protoimpl.X.CompressGZIP(file_mesh_v1alpha1_mesh_insight_proto_rawDescData)
	})
	return file_mesh_v1alpha1_mesh_insight_proto_rawDescData
}

var file_mesh_v1alpha1_mesh_insight_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_mesh_v1alpha1_mesh_insight_proto_goTypes = []interface{}{
	(*MeshInsight)(nil),               // 0: kuma.mesh.v1alpha1.MeshInsight
	(*MeshInsight_DataplaneStat)(nil), // 1: kuma.mesh.v1alpha1.MeshInsight.DataplaneStat
	(*MeshInsight_PolicyStat)(nil),    // 2: kuma.mesh.v1alpha1.MeshInsight.PolicyStat
	nil,                               // 3: kuma.mesh.v1alpha1.MeshInsight.PoliciesEntry
	(*MeshInsight_DpVersions)(nil),    // 4: kuma.mesh.v1alpha1.MeshInsight.DpVersions
	nil,                               // 5: kuma.mesh.v1alpha1.MeshInsight.DpVersions.KumaDpEntry
	nil,                               // 6: kuma.mesh.v1alpha1.MeshInsight.DpVersions.EnvoyEntry
	(*timestamppb.Timestamp)(nil),     // 7: google.protobuf.Timestamp
}
var file_mesh_v1alpha1_mesh_insight_proto_depIdxs = []int32{
	7, // 0: kuma.mesh.v1alpha1.MeshInsight.last_sync:type_name -> google.protobuf.Timestamp
	1, // 1: kuma.mesh.v1alpha1.MeshInsight.dataplanes:type_name -> kuma.mesh.v1alpha1.MeshInsight.DataplaneStat
	3, // 2: kuma.mesh.v1alpha1.MeshInsight.policies:type_name -> kuma.mesh.v1alpha1.MeshInsight.PoliciesEntry
	4, // 3: kuma.mesh.v1alpha1.MeshInsight.dpVersions:type_name -> kuma.mesh.v1alpha1.MeshInsight.DpVersions
	2, // 4: kuma.mesh.v1alpha1.MeshInsight.PoliciesEntry.value:type_name -> kuma.mesh.v1alpha1.MeshInsight.PolicyStat
	5, // 5: kuma.mesh.v1alpha1.MeshInsight.DpVersions.kumaDp:type_name -> kuma.mesh.v1alpha1.MeshInsight.DpVersions.KumaDpEntry
	6, // 6: kuma.mesh.v1alpha1.MeshInsight.DpVersions.envoy:type_name -> kuma.mesh.v1alpha1.MeshInsight.DpVersions.EnvoyEntry
	1, // 7: kuma.mesh.v1alpha1.MeshInsight.DpVersions.KumaDpEntry.value:type_name -> kuma.mesh.v1alpha1.MeshInsight.DataplaneStat
	1, // 8: kuma.mesh.v1alpha1.MeshInsight.DpVersions.EnvoyEntry.value:type_name -> kuma.mesh.v1alpha1.MeshInsight.DataplaneStat
	9, // [9:9] is the sub-list for method output_type
	9, // [9:9] is the sub-list for method input_type
	9, // [9:9] is the sub-list for extension type_name
	9, // [9:9] is the sub-list for extension extendee
	0, // [0:9] is the sub-list for field type_name
}

func init() { file_mesh_v1alpha1_mesh_insight_proto_init() }
func file_mesh_v1alpha1_mesh_insight_proto_init() {
	if File_mesh_v1alpha1_mesh_insight_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_mesh_v1alpha1_mesh_insight_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MeshInsight); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_mesh_v1alpha1_mesh_insight_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MeshInsight_DataplaneStat); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_mesh_v1alpha1_mesh_insight_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MeshInsight_PolicyStat); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_mesh_v1alpha1_mesh_insight_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MeshInsight_DpVersions); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_mesh_v1alpha1_mesh_insight_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_mesh_v1alpha1_mesh_insight_proto_goTypes,
		DependencyIndexes: file_mesh_v1alpha1_mesh_insight_proto_depIdxs,
		MessageInfos:      file_mesh_v1alpha1_mesh_insight_proto_msgTypes,
	}.Build()
	File_mesh_v1alpha1_mesh_insight_proto = out.File
	file_mesh_v1alpha1_mesh_insight_proto_rawDesc = nil
	file_mesh_v1alpha1_mesh_insight_proto_goTypes = nil
	file_mesh_v1alpha1_mesh_insight_proto_depIdxs = nil
}
