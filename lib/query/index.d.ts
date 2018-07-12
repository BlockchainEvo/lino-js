import * as Types from '../common';
import { ITransport, ResultKV } from '../transport';
import { StdTx } from '../transport/encoder';
import { ResultBlock } from '../transport/rpc';
export default class Query {
    private _transport;
    constructor(transport: ITransport);
    /**
     * doesUsernameMatchMasterPrivKey returns true if a user has the master private key.
     *
     * @param username
     * @param masterPrivKeyHex
     */
    doesUsernameMatchMasterPrivKey(username: string, masterPrivKeyHex: string): Promise<boolean>;
    /**
     * doesUsernameMatchTxPrivKey returns true if a user has the transaction private key.
     *
     * @param username
     * @param txPrivKeyHex
     */
    doesUsernameMatchTxPrivKey(username: string, txPrivKeyHex: string): Promise<boolean>;
    /**
     * doesUsernameMatchMicropaymentPrivKey returns true if a user has the micropayment private key.
     *
     * @param username
     * @param micropaymentPrivKeyHex
     */
    doesUsernameMatchMicropaymentPrivKey(username: string, micropaymentPrivKeyHex: string): Promise<boolean>;
    /**
     * doesUsernameMatchPostPrivKey returns true if a user has the post private key.
     *
     * @param username
     * @param postPrivKeyHex
     */
    doesUsernameMatchPostPrivKey(username: string, postPrivKeyHex: string): Promise<boolean>;
    /**
     * getAllValidators returns all oncall validators from blockchain.
     */
    getAllValidators(): Promise<AllValidators>;
    /**
     * getValidator returns validator info given a validator name from blockchain.
     *
     * @param username: the validator username
     */
    getValidator(username: string): Promise<Validator>;
    /**
     * getSeqNumber returns the next sequence number of a user which should
     * be used for broadcast.
     *
     * @param username
     */
    getSeqNumber(username: string): Promise<number>;
    /**
     * getAllBalanceHistory returns all transaction history related to
     * a user's account balance, in reverse-chronological order.
     *
     * @param username
     */
    getAllBalanceHistory(username: string): Promise<BalanceHistory>;
    /**
     * getBalanceHistoryBundle returns all balance history in a certain bucket.
     *
     * @param username
     * @param index
     */
    getBalanceHistoryBundle(username: string, index: number): Promise<BalanceHistory>;
    /**
     * getAccountMeta returns account meta info for a specific user.
     *
     * @param username
     */
    getAccountMeta(username: string): Promise<AccountMeta>;
    /**
     * getAccountBank returns account bank info for a specific user.
     *
     * @param username
     */
    getAccountBank(username: string): Promise<AccountBank>;
    /**
     * getAccountInfo returns account info for a specific user.
     *
     * @param username
     */
    getAccountInfo(username: string): Promise<AccountInfo>;
    /**
     * getGrantPubKey returns the specific granted pubkey info of a user
     * that has given to the pubKey.
     *
     * @param username
     * @param pubKeyHex
     */
    getGrantPubKey(username: string, pubKeyHex: string): Promise<GrantPubKey>;
    /**
     * getAllGrantPubKeys returns a list of all granted public keys of a user.
     *
     * @param username
     */
    getAllGrantPubKeys(username: string): Promise<ResultKV<string, GrantPubKey>[]>;
    /**
     * getReward returns rewards of a user.
     *
     * @param username
     */
    getReward(username: string): Promise<Reward>;
    /**
     * getAllRewardHistory returns all reward history related to
     * a user's posts reward, in reverse-chronological order.
     *
     * @param username
     */
    getAllRewardHistory(username: string): Promise<RewardHistory>;
    /**
     * getRewardHistoryBundle returns all reward history in a certain bucket.
     *
     * @param username
     * @param index
     */
    getRewardHistoryBundle(username: string, index: number): Promise<RewardHistory>;
    /**
     * getRelationship returns the donation times of two users.
     *
     * @param me
     * @param other
     */
    getRelationship(me: string, other: string): Promise<Relationship>;
    /**
     * getAllRelationships returns all donation relationship of a user.
     *
     * @param username
     */
    getAllRelationships(username: string): Promise<ResultKV<string, Relationship>[]>;
    /**
     * getFollowerMeta returns the follower meta of two users.
     *
     * @param me
     * @param myFollower
     */
    getFollowerMeta(me: string, myFollower: string): Promise<FollowerMeta>;
    /**
     * getAllFollowerMeta returns all follower meta of a user.
     *
     * @param username
     */
    getAllFollowerMeta(username: string): Promise<ResultKV<string, FollowerMeta>[]>;
    /**
     * getFollowingMeta returns the following meta of two users.
     *
     * @param me
     * @param myFollowing
     */
    getFollowingMeta(me: string, myFollowing: string): Promise<FollowingMeta>;
    /**
     * getAllFollowingMeta returns all following meta of a user.
     *
     * @param username
     */
    getAllFollowingMeta(username: string): Promise<ResultKV<string, FollowingMeta>[]>;
    /**
     * getAllPosts returns all posts the author created.
     *
     * @param author
     */
    getAllPosts(author: string): Promise<ResultKV<string, PostInfo>[]>;
    /**
     * getPostComment returns a specific comment of a post given the post permlink
     * and comment permlink.
     *
     * @param author
     * @param postID
     * @param commentPermlink
     */
    getPostComment(author: string, postID: string, commentPermlink: string): Promise<Comment>;
    /**
     * getPostAllComments returns all comments that a post has.
     *
     * @param author
     * @param postID
     */
    getPostAllComments(author: string, postID: string): Promise<ResultKV<string, Comment>[]>;
    /**
     * getPostView returns a view of a post performed by a user.
     *
     * @param author
     * @param postID
     * @param viewUser
     */
    getPostView(author: string, postID: string, viewUser: string): Promise<View>;
    /**
     * getPostAllViews returns all views that a post has.
     *
     * @param author
     * @param postID
     */
    getPostAllViews(author: string, postID: string): Promise<ResultKV<string, View>[]>;
    /**
     * getPostDonations returns all donations that a user has given to a post.
     *
     * @param author
     * @param postID
     * @param donateUser
     */
    getPostDonations(author: string, postID: string, donateUser: string): Promise<Donations>;
    /**
     * getPostAllDonations returns all donations that a post has received.
     *
     * @param author
     * @param postID
     */
    getPostAllDonations(author: string, postID: string): Promise<ResultKV<string, Donations>[]>;
    /**
     * getPostReportOrUpvote returns report or upvote that a user has given to a post.
     *
     * @param author
     * @param postID
     * @param user
     */
    getPostReportOrUpvote(author: string, postID: string, user: string): Promise<ReportOrUpvote>;
    /**
     * getPostAllReportOrUpvotes returns all reports or upvotes that a post has received.
     *
     * @param author
     * @param postID
     */
    getPostAllReportOrUpvotes(author: string, postID: string): Promise<ResultKV<string, ReportOrUpvote>[]>;
    /**
     * getPostLike returns like that a user has given to a post.
     *
     * @param author
     * @param postID
     * @param likeUser
     */
    getPostLike(author: string, postID: string, likeUser: string): Promise<Like>;
    /**
     * getPostAllLikes returns all likes that a post has received.
     *
     * @param author
     * @param postID
     */
    getPostAllLikes(author: string, postID: string): Promise<ResultKV<string, Like>[]>;
    /**
     * getPostInfo returns post info given a permlink(author#postID).
     *
     * @param author
     * @param postID
     */
    getPostInfo(author: string, postID: string): Promise<PostInfo>;
    /**
     * getPostMeta returns post meta given a permlink.
     *
     * @param author
     * @param postID
     */
    getPostMeta(author: string, postID: string): Promise<PostMeta>;
    /**
     * GetDelegation returns the delegation relationship between
     * a voter and a delegator from blockchain.
     *
     * @param voter
     * @param delegator
     */
    getDelegation(voter: string, delegator: string): Promise<Delegation>;
    /**
     * getVoterAllDelegation returns all delegations that are delegated to a voter.
     *
     * @param voter
     */
    getVoterAllDelegation(voter: string): Promise<ResultKV<string, Delegation>[]>;
    /**
     * getDelegatorAllDelegation returns all delegations that a delegator has delegated to.
     *
     * @param delegatorName
     */
    getDelegatorAllDelegation(delegatorName: string): Promise<ResultKV<string, Delegation>[]>;
    /**
     * getVoter returns voter info given a voter name from blockchain.
     *
     * @param voterName
     */
    getVoter(voterName: string): Promise<Voter>;
    /**
     * getVote returns a vote performed by a voter for a given proposal.
     *
     * @param proposalID
     * @param voter
     */
    getVote(proposalID: string, voter: string): Promise<Vote>;
    /**
     * getProposalAllVotes returns all votes of a given proposal.
     *
     * @param proposalID
     */
    getProposalAllVotes(proposalID: string): Promise<ResultKV<string, Vote>[]>;
    /**
     * getDeveloper returns a specific developer info from blockchain
     *
     * @param developerName
     */
    getDeveloper(developerName: string): Promise<Developer>;
    /**
     * getDevelopers returns a list of develop.
     */
    getDevelopers(): Promise<ResultKV<string, Developer>[]>;
    /**
     * getDeveloperList returns a list of developer name.
     */
    getDeveloperList(): Promise<DeveloperList>;
    /**
     * getInfraProvider returns the infra provider info such as usage.
     *
     * @param providerName
     */
    getInfraProvider(providerName: string): Promise<InfraProvider>;
    /**
     * getInfraProviders returns a list of all infra providers.
     */
    getInfraProviders(): Promise<InfraProviderList>;
    /**
     * GetProposalList returns a list of all proposals, including onging
     * proposals and past ones.
     */
    getProposalList(): Promise<ProposalList>;
    /**
     * getProposal returns proposal info of a specific proposalID.
     *
     * @param proposalID
     */
    getProposal(proposalID: string): Promise<Proposal>;
    /**
     * getOngoingProposal returns all ongoing proposals.
     */
    getOngoingProposal(): Promise<Proposal[]>;
    /**
     * getExpiredProposal returns all past proposals.
     */
    getExpiredProposal(): Promise<Proposal[]>;
    /**
     * getNextProposalID returns the next proposal id
     */
    getNextProposalID(): Promise<NextProposalID>;
    /**
     * getEvaluateOfContentValueParam returns the EvaluateOfContentValueParam.
     */
    getEvaluateOfContentValueParam(): Promise<Types.EvaluateOfContentValueParam>;
    /**
     * getGlobalAllocationParam returns the GlobalAllocationParam.
     */
    getGlobalAllocationParam(): Promise<Types.GlobalAllocationParam>;
    /**
     * getInfraInternalAllocationParam returns the InfraInternalAllocationParam.
     */
    getInfraInternalAllocationParam(): Promise<Types.InfraInternalAllocationParam>;
    /**
     * getDeveloperParam returns the DeveloperParam.
     */
    getDeveloperParam(): Promise<Types.DeveloperParam>;
    /**
     * getVoteParam returns the VoteParam.
     */
    getVoteParam(): Promise<Types.VoteParam>;
    /**
     * getProposalParam returns the ProposalParam.
     */
    getProposalParam(): Promise<Types.ProposalParam>;
    /**
     * getValidatorParam returns the ValidatorParam.
     */
    getValidatorParam(): Promise<Types.ValidatorParam>;
    /**
     * getCoinDayParam returns the CoinDayParam.
     */
    getCoinDayParam(): Promise<Types.CoinDayParam>;
    /**
     * getBandwidthParam returns the BandwidthParam.
     */
    getBandwidthParam(): Promise<Types.BandwidthParam>;
    /**
     * getAccountParam returns the AccountParam.
     */
    getAccountParam(): Promise<Types.AccountParam>;
    /**
     * getGlobalMeta returns the GlobalMeta.
     */
    getGlobalMeta(): Promise<Types.GlobalMeta>;
    /**
     * getAccountParam returns the AccountParam.
     */
    getConsumptionMeta(): Promise<Types.ConsumptionMeta>;
    /**
     * getPostParam returns the PostParam.
     */
    getPostParam(): Promise<Types.PostParam>;
    /**
     * getBlock returns a block at a certain height from blockchain.
     *
     * @param height
     */
    getBlock(height: number): Promise<ResultBlock>;
    /**
     * getTxsInBlock returns all transactions in a block at a certain height from blockchain.
     * @param height
     */
    getTxsInBlock(height: number): Promise<StdTx[]>;
    /**
     * getBalanceHistoryFromTo returns a list of transaction history in the range of [from, to],
     * that if to is larger than the number of tx, tx will be replaced by the larget tx number,
     * related to a user's account balance, in reverse-chronological order.
     *
     * @param username: user name
     * @param from: the start index of the balance history, inclusively
     * @param to: the end index of the balance history, inclusively
     */
    getBalanceHistoryFromTo(username: string, from: number, to: number): Promise<BalanceHistory>;
    /**
     * getRecentBalanceHistory returns a certain number of recent transaction history
     * related to a user's account balance, in reverse-chronological order.
     *
     * @param username: user name
     * @param numHistory: the number of balance history are wanted
     */
    getRecentBalanceHistory(username: string, numHistory: number): Promise<BalanceHistory>;
    /**
     * getRewardHistoryFromTo returns a list of reward history in the range of [from, to],
     * that if to is larger than the number of tx, tx will be replaced by the largest tx number,
     * related to a user's posts rewards, in reverse-chronological order.
     *
     * @param username: user name
     * @param from: the start index of the reward history, inclusively
     * @param to: the end index of the reward history, inclusively
     */
    getRewardHistoryFromTo(username: string, from: number, to: number): Promise<RewardHistory>;
    /**
     * getRecentRewardHistory returns a certain number of recent reward history
     * related to a user's posts reward, in reverse-chronological order.
     *
     * @param username: user name
     * @param numReward: the number of reward history are wanted
     */
    getRecentRewardHistory(username: string, numReward: number): Promise<RewardHistory>;
    isValidNat(num: number): boolean;
}
export interface PubKey {
    type: string;
    data: string;
}
export interface ABCIValidator {
    address: string;
    pub_key: PubKey;
    power: number;
}
export interface Validator {
    abci: ABCIValidator;
    username: string;
    deposit: Types.Coin;
    absent_commit: number;
    byzantine_commit: number;
    produced_blocks: number;
    link: string;
}
export interface AllValidators {
    oncall_validators: string[];
    all_validators: string[];
    pre_block_validators: string[];
    lowest_power: Types.Coin;
    lowest_validator: string;
}
export interface Voter {
    username: string;
    deposit: Types.Coin;
    delegated_power: Types.Coin;
}
export interface Vote {
    voter: string;
    voting_power: Types.Coin;
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
    last_view_at: number;
    times: number;
}
export interface Like {
    username: string;
    weight: number;
    created_at: number;
}
export interface Donation {
    amount: Types.Coin;
    created: number;
    donation_type: number;
}
export interface Donations {
    username: string;
    donation_list: Donation[];
}
export interface ReportOrUpvote {
    username: string;
    stake: Types.Coin;
    created_at: number;
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
    created_at: number;
    last_updated_at: number;
    last_activity_at: number;
    allow_replies: boolean;
    is_deleted: boolean;
    total_like_count: number;
    total_donate_count: number;
    total_like_weight: number;
    total_dislike_weight: number;
    total_report_stake: Types.Coin;
    total_upvote_stake: Types.Coin;
    total_view_count: number;
    total_reward: Types.Coin;
    redistribution_split_rate: Types.Rat;
}
export interface Developer {
    username: string;
    deposit: Types.Coin;
    app_consumption: Types.Coin;
    website: string;
    description: string;
    app_meta_data: string;
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
export interface AccountInfo {
    username: string;
    created_at: number;
    master_key: string;
    transaction_key: string;
    micropayment_key: string;
    post_key: string;
}
export interface AccountBank {
    saving: Types.Coin;
    stake: Types.Coin;
    frozen_money_list: FrozenMoney[];
    number_of_transaction: number;
    number_of_reward: number;
}
export interface FrozenMoney {
    amount: Types.Coin;
    start_at: number;
    times: number;
    interval: number;
}
export interface GrantPubKey {
    username: string;
    permission: number;
    left_times: number;
    created_at: number;
    expires_at: number;
}
export interface AccountMeta {
    sequence: number;
    last_activity_at: number;
    transaction_capacity: Types.Coin;
    json_meta: string;
    last_report_or_upvote_at: number;
}
export interface FollowerMeta {
    created_at: number;
    follower_name: string;
}
export interface FollowingMeta {
    created_at: number;
    following_name: string;
}
export interface Reward {
    original_income: Types.Coin;
    friction_income: Types.Coin;
    actual_reward: Types.Coin;
    unclaim_reward: Types.Coin;
}
export interface RewardDetail {
    original_income: Types.Coin;
    friction_income: Types.Coin;
    actual_reward: Types.Coin;
    consumer: string;
    post_author: string;
    post_id: string;
}
export interface RewardHistory {
    details: RewardDetail[];
}
export interface Relationship {
    donation_times: number;
}
export interface RangeQueryResult<T> {
    key: string;
    result: T;
}
export interface BalanceHistory {
    details: Detail[];
}
export interface Detail {
    detail_type: number;
    from: string;
    to: string;
    amount: Types.Coin;
    created_at: number;
    memo: string;
}
export interface ProposalList {
    ongoing_proposal?: string[];
    past_proposal?: string[];
}
export interface ProposalInfo {
    creator: string;
    proposal_id: string;
    agree_vote: Types.Coin;
    disagree_vote: Types.Coin;
    result: number;
    created_at: number;
    expired_at: number;
}
export interface NextProposalID {
    next_proposal_id: number;
}
export interface Proposal {
    type: string;
    value: ProposalValue;
}
export interface ProposalValue {
    ProposalInfo: ProposalInfo;
    [propName: string]: any;
}
export interface ChangeParamProposalValue extends ProposalValue {
    param: Types.Parameter;
}
export declare function isChangeParamProposalValue(value: ProposalValue): value is ChangeParamProposalValue;
export interface ContentCensorshipProposalValue extends ProposalValue {
    permLink: string;
    reason: string;
}
export declare function isContentCensorshipProposalValue(value: ProposalValue): value is ContentCensorshipProposalValue;
export interface ProtocolUpgradeProposalValue extends ProposalValue {
    link: string;
}
export declare function isProtocolUpgradeProposalValue(value: ProposalValue): value is ProtocolUpgradeProposalValue;
export declare const DETAILTYPE: {
    TransferIn: number;
    DonationIn: number;
    ClaimReward: number;
    ValidatorInflation: number;
    DeveloperInflation: number;
    InfraInflation: number;
    VoteReturnCoin: number;
    DelegationReturnCoin: number;
    ValidatorReturnCoin: number;
    DeveloperReturnCoin: number;
    InfraReturnCoin: number;
    ProposalReturnCoin: number;
    GenesisCoin: number;
    TransferOut: number;
    DonationOut: number;
    Delegate: number;
    VoterDeposit: number;
    ValidatorDeposit: number;
    DeveloperDeposit: number;
    InfraDeposit: number;
    ProposalDeposit: number;
};