import { ITransport } from '../transport';
import { StdTx } from '../transport/encoder';
import { ResultBlock } from '../transport/rpc';
import * as Types from '../common';
export default class Query {
    private _transport;
    constructor(transport: ITransport);
    doesUsernameMatchPrivKey(username: string, privKeyHex: string): Promise<boolean>;
    getAllValidators(): Promise<AllValidators>;
    getValidator(username: string): Promise<Validator>;
    getAccountMeta(username: string): Promise<AccountMeta>;
    getAccountBank(username: string): Promise<AccountBank>;
    getAccountInfo(username: string): Promise<AccountInfo | null>;
    getGrantList(username: string): Promise<GrantKeyList | null>;
    getReward(username: string): Promise<Reward>;
    getRelationship(me: string, other: string): Promise<Relationship>;
    getFollowerMeta(me: string, myFollower: string): Promise<FollowerMeta>;
    getFollowingMeta(me: string, myFollowing: string): Promise<FollowingMeta>;
    getPostComment(author: string, postID: string, commentPostKey: string): Promise<Comment>;
    getPostView(author: string, postID: string, viewUser: string): Promise<View>;
    getPostDonation(author: string, postID: string, donateUser: string): Promise<Donation>;
    getPostReportOrUpvote(author: string, postID: string, user: string): Promise<ReportOrUpvote>;
    getPostInfo(author: string, postID: string): Promise<PostInfo>;
    getPostMeta(author: string, postID: string): Promise<PostMeta>;
    getDelegation(voter: string, delegator: string): Promise<Delegation>;
    getVoter(voterName: string): Promise<Voter>;
    getDeveloper(developerName: string): Promise<Developer>;
    getDevelopers(): Promise<DeveloperList>;
    getInfraProvider(providerName: string): Promise<InfraProvider>;
    getInfraProviders(): Promise<InfraProviderList>;
    getProposalList(): Promise<ProposalList>;
    getEvaluateOfContentValueParam(): Promise<Types.EvaluateOfContentValueParam>;
    getGlobalAllocationParam(): Promise<Types.GlobalAllocationParam>;
    getInfraInternalAllocationParam(): Promise<Types.InfraInternalAllocationParam>;
    getDeveloperParam(): Promise<Types.DeveloperParam>;
    getVoteParam(): Promise<Types.VoteParam>;
    getProposalParam(): Promise<Types.ProposalParam>;
    getValidatorParam(): Promise<Types.ValidatorParam>;
    getCoinDayParam(): Promise<Types.CoinDayParam>;
    getBandwidthParam(): Promise<Types.BandwidthParam>;
    getAccountParam(): Promise<Types.AccountParam>;
    getBlock(height: number): Promise<ResultBlock>;
    getTxsInBlock(height: number): Promise<StdTx[]>;
}
export interface AllValidators {
    oncall_validators: string[];
    all_validators: string[];
    pre_block_validators: string[];
    lowest_power: Types.Coin;
    lowest_validator: string;
}
export interface ABCIValidator {
    pub_key: string;
    power: number;
}
export interface Validator {
    abci: ABCIValidator;
    username: string;
    deposit: Types.Coin;
    absent_commit: number;
    produced_blocks: number;
    link: string;
}
export interface Voter {
    username: string;
    deposit: Types.Coin;
    delegated_power: Types.Coin;
}
export interface Vote {
    voter: string;
    result: boolean;
}
export interface Delegation {
    delegator: string;
    amount: Types.Coin;
}
export interface Comment {
    author: string;
    post_key: string;
    created: number;
}
export interface View {
    username: string;
    created: number;
    times: number;
}
export interface Like {
    username: string;
    weight: number;
    created: number;
}
export interface Donation {
    amount: Types.Coin;
    created: number;
}
export interface ReportOrUpvote {
    username: string;
    stake: Types.Coin;
    created: number;
    is_report: boolean;
}
export interface PostInfo {
    post_id: string;
    title: string;
    content: string;
    author: string;
    parent_author: string;
    parent_postID: string;
    source_author: string;
    source_postID: string;
    links: Types.IDToURLMapping[];
}
export interface PostMeta {
    created: number;
    last_update: number;
    last_activity: number;
    allow_replies: boolean;
    total_like_count: number;
    total_donate_count: number;
    total_like_weight: number;
    total_dislike_weight: number;
    total_report_stake: Types.Coin;
    total_upvote_stake: Types.Coin;
    reward: Types.Coin;
    is_deleted: boolean;
    redistribution_split_rate: Types.Rat;
}
export interface Developer {
    username: string;
    deposit: Types.Coin;
    app_consumption: Types.Coin;
}
export interface DeveloperList {
    all_developers: string[];
}
export interface InfraProvider {
    username: string;
    usage: number;
}
export interface InfraProviderList {
    all_infra_providers: string[];
}
export interface AccountMeta {
    sequence: number;
    last_activity: number;
    transaction_capacity: Types.Coin;
}
export interface AccountInfo {
    username: string;
    created_at: number;
    master_key: string;
    transaction_key: string;
    post_key: string;
}
export interface AccountBank {
    saving: Types.Coin;
    stake: Types.Coin;
    frozen_money_list: FrozenMoney[];
}
export interface FrozenMoney {
    amount: Types.Coin;
    start_at: number;
    times: number;
    interval: number;
}
export interface GrantKeyList {
    grant_public_key_list: GrantPubKey[];
}
export interface GrantPubKey {
    username: string;
    public_key: string;
    expires_at: number;
}
export interface Reward {
    original_income: Types.Coin;
    friction_income: Types.Coin;
    actual_reward: Types.Coin;
    unclaim_reward: Types.Coin;
}
export interface Relationship {
    donation_times: number;
}
export interface FollowerMeta {
    created_at: number;
    follower_name: string;
}
export interface FollowingMeta {
    created_at: number;
    following_name: string;
}
export interface ProposalList {
    ongoing_proposal: string[];
    past_proposal: string[];
}
export interface ProposalInfo {
    creator: string;
    proposal_id: string;
    agree_vote: Types.Coin;
    disagree_vote: Types.Coin;
    result: number;
}